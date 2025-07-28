import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+27|0)[0-9]{9}$/.test(val.replace(/\s/g, '')),
      'Please enter a valid South African phone number'
    ),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  serviceType: z.enum(
    [
      'tender-management',
      'project-management',
      'web-development',
      'consultation',
    ],
    {
      required_error: 'Please select a service type',
    }
  ),
  projectTitle: z
    .string()
    .max(100, 'Project title must be less than 100 characters')
    .optional(),
  timeline: z
    .enum(['urgent', 'month', 'quarter', 'flexible', 'discuss'])
    .optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your project')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceTypeLabels = {
  'tender-management': 'Tender Management',
  'project-management': 'Project Management',
  'web-development': 'Web Development',
  consultation: 'General Consultation',
} as const;

export const timelineLabels = {
  urgent: 'ASAP (Within 2 weeks)',
  month: 'Within 1 month',
  quarter: 'Within 3 months',
  flexible: 'Flexible timeline',
  discuss: 'Need to discuss',
} as const;
