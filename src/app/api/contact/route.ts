import { NextRequest, NextResponse } from 'next/server';
import {
  contactFormSchema,
  serviceTypeLabels,
  timelineLabels,
} from '@/lib/validations/contact';
import { z } from 'zod';

// Email service configuration (using a simple email service)
// In production, you would use services like Resend, SendGrid, or similar
const CONTACT_EMAIL = 'hello@jacobc.co.za';

// Service-specific email templates
const getEmailTemplate = (data: z.infer<typeof contactFormSchema>) => {
  const serviceType = serviceTypeLabels[data.serviceType];
  const timeline = data.timeline
    ? timelineLabels[data.timeline]
    : 'Not specified';

  const subject = `New ${serviceType} Consultation Request from ${data.firstName} ${data.lastName}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Consultation Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #16a34a; }
        .value { margin-top: 5px; }
        .service-badge { 
          background: #16a34a; 
          color: white; 
          padding: 4px 12px; 
          border-radius: 20px; 
          font-size: 12px; 
          display: inline-block;
        }
        .priority { 
          background: ${data.timeline === 'urgent' ? '#dc2626' : '#16a34a'}; 
          color: white; 
          padding: 4px 12px; 
          border-radius: 4px; 
          font-size: 12px; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Consultation Request</h1>
          <p>Service Type: <span class="service-badge">${serviceType}</span></p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Client Information</div>
            <div class="value">
              <strong>${data.firstName} ${data.lastName}</strong><br>
              Email: <a href="mailto:${data.email}">${data.email}</a><br>
              ${data.phone ? `Phone: ${data.phone}<br>` : ''}
              ${data.company ? `Company: ${data.company}<br>` : ''}
            </div>
          </div>

          <div class="field">
            <div class="label">Project Details</div>
            <div class="value">
              ${
                data.projectTitle
                  ? `<strong>Project:</strong> ${data.projectTitle}<br>`
                  : ''
              }
              <strong>Timeline:</strong> <span class="priority">${timeline}</span><br>
            </div>
          </div>

          <div class="field">
            <div class="label">Project Description</div>
            <div class="value" style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #16a34a;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div class="field">
            <div class="label">Next Steps</div>
            <div class="value">
              <ul>
                <li>Respond within 24-48 hours</li>
                <li>Schedule initial consultation call</li>
                <li>Prepare service-specific proposal</li>
                <li>${
                  data.timeline === 'urgent'
                    ? '<strong>URGENT: Client needs ASAP delivery</strong>'
                    : 'Follow standard consultation process'
                }</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New ${serviceType} Consultation Request

Client Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
${data.phone ? `- Phone: ${data.phone}` : ''}
${data.company ? `- Company: ${data.company}` : ''}

Project Details:
${data.projectTitle ? `- Project: ${data.projectTitle}` : ''}
- Timeline: ${timeline}

Project Description:
${data.message}

Next Steps:
- Respond within 24-48 hours
- Schedule initial consultation call
- Prepare service-specific proposal
${data.timeline === 'urgent' ? '- URGENT: Client needs ASAP delivery' : ''}
  `;

  return { subject, htmlContent, textContent };
};

// Auto-reply email template
const getAutoReplyTemplate = (data: z.infer<typeof contactFormSchema>) => {
  const serviceType = serviceTypeLabels[data.serviceType];

  const subject = `Thank you for your ${serviceType} consultation request`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Consultation Request Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #16a34a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .highlight { background: #e7f5e7; padding: 15px; border-radius: 4px; border-left: 4px solid #16a34a; }
        .contact-info { background: white; padding: 15px; border-radius: 4px; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${data.firstName}!</h1>
          <p>Your consultation request has been received</p>
        </div>
        
        <div class="content">
          <p>Thank you for your interest in my ${serviceType.toLowerCase()} services. I've received your consultation request and will respond within 24-48 hours.</p>
          
          <div class="highlight">
            <h3>What happens next?</h3>
            <ol>
              <li><strong>Initial Review:</strong> I'll review your project requirements and prepare initial recommendations</li>
              <li><strong>Consultation Call:</strong> We'll schedule a call to discuss your needs in detail</li>
              <li><strong>Proposal:</strong> I'll provide a detailed proposal with timeline and pricing</li>
              <li><strong>Project Kickoff:</strong> Once approved, we'll begin your project</li>
            </ol>
          </div>

          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Jacob Chademwiri</strong><br>
              Tendering & Accounts Receivable Manager | Projects Coordinator<br>
              SITHEMBE TRANSPORTATION & PROJECTS<br><br>
              
              Email: <a href="mailto:hello@jacobc.co.za">hello@jacobc.co.za</a><br>
              LinkedIn: <a href="https://linkedin.com/in/jchademwiri">Jacob Chademwiri</a><br>
              Website: <a href="https://jacobc.co.za">jacobc.co.za</a>
            </p>
          </div>

          <p><em>I look forward to discussing how I can help with your ${serviceType.toLowerCase()} needs!</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, htmlContent };
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Request body received:', body);

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    // In a real application, you would send emails here
    // For now, we'll simulate the email sending process

    // Generate email templates
    const notificationEmail = getEmailTemplate(validatedData);
    const autoReplyEmail = getAutoReplyTemplate(validatedData);

    // Log the emails (in production, you would send them)
    console.log('=== NOTIFICATION EMAIL ===');
    console.log('To:', CONTACT_EMAIL);
    console.log('Subject:', notificationEmail.subject);
    console.log('Content:', notificationEmail.textContent);

    console.log('\n=== AUTO-REPLY EMAIL ===');
    console.log('To:', validatedData.email);
    console.log('Subject:', autoReplyEmail.subject);

    // Here you would integrate with your email service:
    // - Resend: await resend.emails.send(...)
    // - SendGrid: await sgMail.send(...)
    // - Nodemailer: await transporter.sendMail(...)

    // For now, we'll simulate successful email sending
    const emailsSent = {
      notification: true,
      autoReply: true,
    };

    // You could also save the contact form submission to your database here
    // await db.insert(contactSubmissions).values({
    //   ...validatedData,
    //   submittedAt: new Date(),
    //   status: 'pending'
    // });

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: {
        serviceType: validatedData.serviceType,
        emailsSent,
        expectedResponse: '24-48 hours',
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit consultation request. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
