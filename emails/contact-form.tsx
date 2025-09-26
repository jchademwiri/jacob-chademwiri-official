import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
  Row,
  Column,
} from '@react-email/components';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType:
    | 'tender-management'
    | 'project-management'
    | 'web-development'
    | 'consultation';
  projectTitle?: string;
  timeline?: 'urgent' | 'month' | 'quarter' | 'flexible' | 'discuss';
  message: string;
}

const ContactFormEmail = (props: ContactFormEmailProps) => {
  const serviceTypeLabels = {
    'tender-management': 'Tender Management',
    'project-management': 'Project Management',
    'web-development': 'Web Development',
    consultation: 'General Consultation',
  };

  const timelineLabels = {
    urgent: 'ASAP (Within 2 weeks)',
    month: 'Within 1 month',
    quarter: 'Within 3 months',
    flexible: 'Flexible timeline',
    discuss: 'Need to discuss',
  };

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          New contact form submission from {props.firstName} {props.lastName}
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[28px] font-bold text-gray-900 mb-[8px] text-center">
                New Contact Form Submission
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center mb-[32px] m-0">
                You have received a new inquiry through your website
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Contact Information */}
            <Section className="mb-[32px]">
              <Heading className="text-[20px] font-bold text-gray-900 mb-[16px]">
                Contact Information
              </Heading>

              <Row className="mb-[12px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-gray-700 m-0">
                    Name:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-gray-900 m-0">
                    {props.firstName} {props.lastName}
                  </Text>
                </Column>
              </Row>

              <Row className="mb-[12px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-gray-700 m-0">
                    Email:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-gray-900 m-0">
                    {props.email}
                  </Text>
                </Column>
              </Row>

              {props.phone && (
                <Row className="mb-[12px]">
                  <Column className="w-[30%]">
                    <Text className="text-[14px] font-semibold text-gray-700 m-0">
                      Phone:
                    </Text>
                  </Column>
                  <Column className="w-[70%]">
                    <Text className="text-[14px] text-gray-900 m-0">
                      {props.phone}
                    </Text>
                  </Column>
                </Row>
              )}

              {props.company && (
                <Row className="mb-[12px]">
                  <Column className="w-[30%]">
                    <Text className="text-[14px] font-semibold text-gray-700 m-0">
                      Company:
                    </Text>
                  </Column>
                  <Column className="w-[70%]">
                    <Text className="text-[14px] text-gray-900 m-0">
                      {props.company}
                    </Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Project Details */}
            <Section className="mb-[32px]">
              <Heading className="text-[20px] font-bold text-gray-900 mb-[16px]">
                Project Details
              </Heading>

              <Row className="mb-[12px]">
                <Column className="w-[30%]">
                  <Text className="text-[14px] font-semibold text-gray-700 m-0">
                    Service Type:
                  </Text>
                </Column>
                <Column className="w-[70%]">
                  <Text className="text-[14px] text-gray-900 m-0">
                    {serviceTypeLabels[props.serviceType]}
                  </Text>
                </Column>
              </Row>

              {props.projectTitle && (
                <Row className="mb-[12px]">
                  <Column className="w-[30%]">
                    <Text className="text-[14px] font-semibold text-gray-700 m-0">
                      Project Title:
                    </Text>
                  </Column>
                  <Column className="w-[70%]">
                    <Text className="text-[14px] text-gray-900 m-0">
                      {props.projectTitle}
                    </Text>
                  </Column>
                </Row>
              )}

              {props.timeline && (
                <Row className="mb-[12px]">
                  <Column className="w-[30%]">
                    <Text className="text-[14px] font-semibold text-gray-700 m-0">
                      Timeline:
                    </Text>
                  </Column>
                  <Column className="w-[70%]">
                    <Text className="text-[14px] text-gray-900 m-0">
                      {timelineLabels[props.timeline]}
                    </Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Message */}
            <Section className="mb-[32px]">
              <Heading className="text-[20px] font-bold text-gray-900 mb-[16px]">
                Message
              </Heading>
              <Text className="text-[14px] text-gray-900 leading-[1.6] whitespace-pre-wrap bg-gray-50 p-[16px] rounded-[6px] border border-gray-200">
                {props.message}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                This email was sent from your website contact form.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                Please respond to {props.email} directly.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactFormEmail.PreviewProps = {
  firstName: 'Jacob',
  lastName: 'Chademwiri',
  email: 'jacob.chademwiri@example.com',
  phone: '+27 82 123 4567',
  company: 'Playhouse Media Group',
  serviceType: 'tender-management',
  projectTitle: 'Municipal Infrastructure Tender',
  timeline: 'month',
  message:
    "Hi there,\n\nWe're looking for assistance with managing a large municipal infrastructure tender. The project involves road construction and we need help with the entire tender process from preparation to submission.\n\nWe have experience with smaller projects but this is our first major municipal tender and we want to ensure we do everything correctly.\n\nLooking forward to hearing from you.\n\nBest regards,\nJacob",
};

export default ContactFormEmail;
