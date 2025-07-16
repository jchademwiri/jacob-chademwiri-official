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
import { toast } from 'sonner';
import { Loader2, Target, CheckCircle, Zap, Building } from 'lucide-react';
import {
  contactFormSchema,
  type ContactFormData,
} from '@/lib/validations/contact';

const serviceTypes = [
  {
    value: 'tender-management',
    label: 'Tender Management',
    description: 'CIDB registration, bid preparation, compliance support',
    icon: Target,
  },
  {
    value: 'project-management',
    label: 'Project Management',
    description: 'Project coordination, stakeholder management, delivery',
    icon: CheckCircle,
  },
  {
    value: 'web-development',
    label: 'Web Development',
    description: 'Modern websites, e-commerce, web applications',
    icon: Zap,
  },
  {
    value: 'consultation',
    label: 'General Consultation',
    description: 'Discuss multiple services or general business needs',
    icon: Building,
  },
] as const;

const budgetOptions = [
  { value: 'under-10k', label: 'Under R10,000' },
  { value: '10k-25k', label: 'R10,000 - R25,000' },
  { value: '25k-50k', label: 'R25,000 - R50,000' },
  { value: '50k-100k', label: 'R50,000 - R100,000' },
  { value: 'over-100k', label: 'Over R100,000' },
  { value: 'discuss', label: 'Prefer to discuss' },
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
      budget: undefined,
      timeline: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          // Handle validation errors
          result.errors.forEach((error: { field: string; message: string }) => {
            form.setError(error.field as keyof ContactFormData, {
              message: error.message,
            });
          });
          toast.error('Please check the form for errors');
        } else {
          throw new Error(result.message || 'Failed to submit form');
        }
        return;
      }

      // Success
      setIsSubmitted(true);
      toast.success('Consultation request submitted successfully!', {
        description: 'I&apos;ll respond within 24-48 hours with next steps.',
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit consultation request', {
        description: 'Please try again or contact me directly via email.',
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
          <p className="text-sm text-gray-500">
            I&apos;ll respond within 24-48 hours with next steps for your
            project.
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-4"
        >
          Submit Another Request
        </Button>
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
                <FormLabel>First Name *</FormLabel>
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
                <FormLabel>Last Name *</FormLabel>
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
                <FormLabel>Email Address *</FormLabel>
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

        {/* Service Selection */}
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                Service Type *{' '}
                <span className="text-sm text-gray-500 font-normal">
                  (Select primary service needed)
                </span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                          <div className="text-xs text-gray-500">
                            {service.description}
                          </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Budget Range (optional)</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetOptions.map((option) => (
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description *</FormLabel>
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
          className="w-full bg-green-600 hover:bg-green-700"
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

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          * Required fields. I&apos;ll respond within 24-48 hours with next
          steps.
        </p>
      </form>
    </Form>
  );
}
