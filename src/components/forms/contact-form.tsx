'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import {
  Loader2,
  Target,
  CheckCircle,
  Zap,
  Building,
  AlertTriangle,
  Mail,
} from 'lucide-react';
import {
  contactFormSchema,
  type ContactFormData,
} from '@/lib/validations/contact';
import {

  sendContactEmail,
} from '@/server/contact-form-action';

const serviceTypes = [
  {
    value: 'tender-management',
    label: 'Tender Management',
    icon: Target,
  },
  {
    value: 'project-management',
    label: 'Project Management',
    icon: CheckCircle,
  },
  {
    value: 'web-development',
    label: 'Web Development',
    icon: Zap,
  },
  {
    value: 'consultation',
    label: 'General Consultation',
    icon: Building,
  },
] as const;

const timelineOptions = [
  { value: 'urgent', label: 'ASAP (Within 2 weeks)' },
  { value: 'month', label: 'Within 1 month' },
  { value: 'quarter', label: 'Within 3 months' },
  { value: 'flexible', label: 'Flexible timeline' },
  { value: 'discuss', label: 'Need to discuss' },
] as const;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionWarning, setSubmissionWarning] = useState<string | null>(
    null,
  );
  const [expectedResponse, setExpectedResponse] =
    useState<string>('24-48 hours');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: undefined,
      projectTitle: '',
      timeline: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionWarning(null);

    try {
      // Call the server action
      const result = await sendContactEmail(data);

      if (!result.success) {
        if (result.errors) {
          // Handle validation errors
          result.errors.forEach((error: { field: string; message: string }) => {
            form.setError(error.field as keyof ContactFormData, {
              message: error.message,
            });
          });
          toast.error('Please check the form for errors');
          return;
        }

        // Handle different types of service errors
        const errorType = result.errorType || 'unknown';

        switch (errorType) {
          case 'configuration':
            toast.error('Service Configuration Error', {
              description:
                "There's a configuration issue with our email service. Please contact me directly at hello@jacobc.co.za",
              duration: 8000,
            });
            break;

          case 'rate_limit':
            toast.error('Service Temporarily Unavailable', {
              description:
                'Our email service is experiencing high volume. Please try again in a few minutes.',
              duration: 6000,
            });
            break;

          case 'validation':
            toast.error('Email Validation Error', {
              description:
                'Please check that your email address is correct and try again.',
              duration: 5000,
            });
            break;

          default:
            toast.error('Submission Failed', {
              description:
                result.message ||
                'Please try again or contact me directly at hello@jacobc.co.za',
              duration: 6000,
            });
        }
        return;
      }

      // Handle successful submission (including partial success)
      setIsSubmitted(true);
      setSubmissionWarning(result.warning || null);
      setExpectedResponse(result.data?.expectedResponse || '24-48 hours');

      // Show appropriate success message
      if (result.warning) {
        toast.success('Request Received with Issues', {
          description: result.message,
          duration: 6000,
        });
      } else {
        toast.success('Request Submitted Successfully!', {
          description: result.message,
          duration: 5000,
        });
      }

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Unexpected Error', {
        description:
          'An unexpected error occurred. Please try again or contact me directly at hello@jacobc.co.za',
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your consultation request has been submitted successfully.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            I'll respond within {expectedResponse} with next steps for your
            project.
          </p>

          {submissionWarning && (
            <Alert className="mb-4 max-w-md mx-auto">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-left">
                {submissionWarning}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setSubmissionWarning(null);
              setExpectedResponse('24-48 hours');
            }}
            variant="outline"
            className="mr-2"
          >
            Submit Another Request
          </Button>

          <div className="text-sm text-gray-500 mt-4">
            <p>If you need immediate assistance, you can also reach me at:</p>
            <div className="flex items-center justify-center mt-2">
              <Mail className="h-4 w-4 mr-1" />
              <a
                href="mailto:hello@jacobc.co.za"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                hello@jacobc.co.za
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email Address <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+27 XX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company/Organization</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service Selection */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Service Type <span className="text-destructive">*</span>{' '}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex items-center space-x-2">
                          <service.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{service.label}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Project Details */}
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Timeline</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Project Timeline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timelineOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for your project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Project Description <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer text-white"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Request...
            </>
          ) : (
            'Send Consultation Request'
          )}
        </Button>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="text-destructive">*</span> Required fields. I'll
            respond within 24-48 hours with next steps.
          </p>

          <p className="text-xs text-gray-500">
            Having trouble? Email me directly at{' '}
            <a
              href="mailto:hello@jacobc.co.za"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
            >
              hello@jacobc.co.za
            </a>
          </p>
        </div>
      </form>
    </Form>
  );
}
