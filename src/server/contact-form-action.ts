'use server';

import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import { z } from 'zod';
import ContactFormEmail from '@/email/contact-form';
import AutoReplyEmail from '@/email/auto-reply-email';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const CONTACT_EMAIL = 'hello@jacobc.co.za'; // Must be my contact email
const CONTACT_NAME = 'Jacob Chademwiri';
const FROM_EMAIL = 'info@updates.jacobc.co.za'; // Must be a verified domain in Resend

// Service type labels for email content
const serviceTypeLabels = {
  'tender-management': 'Tender Management',
  'project-management': 'Project Management',
  'web-development': 'Web Development',
  consultation: 'General Consultation',
} as const;

// Type definitions for error handling
interface ResendError extends Error {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorDetails {
  type: 'configuration' | 'rate_limit' | 'validation' | 'service';
  message: string;
  technical: string;
}

// Enhanced error handling for Resend API
function handleResendError(
  error: ResendError,
  context: 'notification' | 'autoReply',
): ErrorDetails {
  const errorMessage = error?.message || 'Unknown error';
  const errorName = error?.name || 'ResendError';

  // Log detailed error for debugging
  console.error(`Resend ${context} email error:`, {
    message: errorMessage,
    name: errorName,
    stack: error?.stack,
    timestamp: new Date().toISOString(),
  });

  // Categorize errors for better user feedback
  if (errorMessage.includes('API key')) {
    return {
      type: 'configuration',
      message: 'Email service configuration error. Please contact support.',
      technical: 'Invalid or missing Resend API key',
    };
  }

  if (errorMessage.includes('domain') || errorMessage.includes('verify')) {
    return {
      type: 'configuration',
      message: 'Email service configuration error. Please contact support.',
      technical: 'Domain not verified in Resend',
    };
  }

  if (errorMessage.includes('rate limit') || errorMessage.includes('quota')) {
    return {
      type: 'rate_limit',
      message:
        'Service temporarily unavailable. Please try again in a few minutes.',
      technical: 'Resend API rate limit exceeded',
    };
  }

  if (
    errorMessage.includes('invalid email') ||
    errorMessage.includes('recipient')
  ) {
    return {
      type: 'validation',
      message: 'Invalid email address provided.',
      technical: 'Email validation failed',
    };
  }

  // Default error
  return {
    type: 'service',
    message: 'Email service temporarily unavailable. Please try again later.',
    technical: errorMessage,
  };
}

// Fallback notification method (could be webhook, database log, etc.)
async function logFailedSubmission(
  data: z.infer<typeof contactFormSchema>,
  error: string,
): Promise<void> {
  console.error('CRITICAL: Failed to send consultation request email:', {
    contactInfo: {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      company: data.company,
      serviceType: data.serviceType,
    },
    error,
    timestamp: new Date().toISOString(),
  });

  // In production, you might want to:
  // - Save to database for manual follow-up
  // - Send to monitoring service (Sentry, DataDog, etc.)
  // - Trigger alert to admin
  // - Log to external service
}

export async function sendContactEmail(
  data: z.infer<typeof contactFormSchema>,
) {
  try {
    // Validate environment setup first
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return {
        success: false,
        message:
          'Email service is not properly configured. Please contact support.',
      };
    }

    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    let notificationSent = false;
    let autoReplySent = false;
    let notificationError: ErrorDetails | null = null;
    let autoReplyError: ErrorDetails | null = null;

    // Try to send notification email
    try {
      const notificationResult = await resend.emails.send({
        from: `${CONTACT_NAME} <${FROM_EMAIL}>`, // From my contact name and email with resend domain
        to: [CONTACT_EMAIL], // Send to my existing contact email
        replyTo: validatedData.email,
        subject: `New ${serviceTypeLabels[validatedData.serviceType]} Consultation Request from ${validatedData.firstName} ${validatedData.lastName}`,
        react: ContactFormEmail(validatedData),
      });

      if (notificationResult.error) {
        notificationError = handleResendError(
          notificationResult.error as ResendError,
          'notification',
        );
        console.error('Notification email failed:', notificationResult.error);
      } else {
        notificationSent = true;
        console.log(
          'Notification email sent successfully:',
          notificationResult.data?.id,
        );
      }
    } catch (error) {
      notificationError = handleResendError(
        error as ResendError,
        'notification',
      );
    }

    // Try to send auto-reply email
    try {
      const autoReplyResult = await resend.emails.send({
        from: `${CONTACT_NAME} <${FROM_EMAIL}>`, // From my contact name and email with resend domain
        to: `${validatedData.firstName} <${validatedData.email}>`, // Send to user's email
        replyTo: `${CONTACT_NAME} <${CONTACT_EMAIL}>`,
        subject: `Thank you for your ${serviceTypeLabels[validatedData.serviceType]} consultation request`,
        react: AutoReplyEmail({
          firstName: validatedData.firstName,
          serviceType: validatedData.serviceType,
        }),
      });

      if (autoReplyResult.error) {
        autoReplyError = handleResendError(
          autoReplyResult.error as ResendError,
          'autoReply',
        );
        console.error('Auto-reply email failed:', autoReplyResult.error);
      } else {
        autoReplySent = true;
        console.log(
          'Auto-reply email sent successfully:',
          autoReplyResult.data?.id,
        );
      }
    } catch (error) {
      autoReplyError = handleResendError(error as ResendError, 'autoReply');
    }

    // Determine response based on what succeeded
    if (!notificationSent && !autoReplySent) {
      // Both emails failed - this is critical
      await logFailedSubmission(
        validatedData,
        'Both notification and auto-reply emails failed',
      );

      // TODO: Save failed contact info to database for manual follow-up
      // Example:
      // await db.failedSubmissions.create({ ...validatedData, error: 'Both emails failed', createdAt: new Date() });

      const primaryError = notificationError || autoReplyError;
      return {
        success: false,
        message:
          primaryError?.message ||
          'Failed to submit consultation request. Please contact me directly via email.',
        errorType: primaryError?.type || 'service',
      };
    }

    if (!notificationSent) {
      // Notification failed but auto-reply sent
      await logFailedSubmission(validatedData, 'Notification email failed');

      // TODO: Save failed contact info to database for manual follow-up
      // Example:
      // await db.failedSubmissions.create({ ...validatedData, error: 'Notification email failed', createdAt: new Date() });

      return {
        success: true,
        message:
          'Your request was received, but there was an issue with our notification system. I may take longer to respond than usual.',
        warning:
          "Partial submission - please follow up if you don't hear back within 48 hours.",
        data: {
          serviceType: validatedData.serviceType,
          autoReplySent,
          expectedResponse: '48-72 hours (delayed due to technical issue)',
        },
      };
    }

    if (!autoReplySent) {
      // Notification sent but auto-reply failed
      // TODO: Save successful contact info to database (email sent, but auto-reply failed)
      // Example:
      // await db.contacts.create({ ...validatedData, status: 'autoReplyFailed', createdAt: new Date() });

      return {
        success: true,
        message:
          "Consultation request submitted successfully! I'll respond within 24-48 hours.",
        warning:
          'Confirmation email could not be sent, but your request was received.',
        data: {
          serviceType: validatedData.serviceType,
          notificationSent,
          expectedResponse: '24-48 hours',
        },
      };
    }

    // Both emails sent successfully
    // TODO: Save successful contact info to database
    // Example:
    // await db.contacts.create({ ...validatedData, status: 'success', createdAt: new Date() });

    return {
      success: true,
      message: 'Consultation request submitted successfully',
      data: {
        serviceType: validatedData.serviceType,
        emailsSent: {
          notification: notificationSent,
          autoReply: autoReplySent,
        },
        expectedResponse: '24-48 hours',
      },
    };
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation error',
        errors: error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }

    return {
      success: false,
      message:
        'Failed to submit consultation request. Please try again or contact me directly via email.',
      errorType: 'unknown',
    };
  }
}
