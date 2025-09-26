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
  Link,
} from '@react-email/components';

interface AutoReplyEmailProps {
  firstName: string;
  serviceType:
    | 'tender-management'
    | 'project-management'
    | 'web-development'
    | 'consultation';
}

const AutoReplyEmail = (props: AutoReplyEmailProps) => {
  const serviceTypeLabels = {
    'tender-management': 'Tender Management',
    'project-management': 'Project Management',
    'web-development': 'Web Development',
    consultation: 'General Consultation',
  };

  const serviceTypeName =
    serviceTypeLabels[props.serviceType] || props.serviceType;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          Thank you for your consultation request - I'll be in touch soon!
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="bg-blue-600 text-white p-[40px] rounded-t-[8px] text-center">
              <Heading className="text-[32px] font-bold mb-[8px] m-0">
                Thank You, {props.firstName}!
              </Heading>
              <Text className="text-[18px] text-blue-100 m-0">
                Your consultation request has been received
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="p-[40px]">
              <Text className="text-[16px] text-gray-700 leading-[1.6] mb-[24px]">
                Thank you for your interest in my{' '}
                {serviceTypeName.toLowerCase()} services. I've received your
                consultation request and will respond within 24-48 hours.
              </Text>

              {/* What happens next section */}
              <Section className="bg-gray-50 p-[24px] rounded-[8px] border border-gray-200 mb-[32px]">
                <Heading className="text-[20px] font-bold text-gray-900 mb-[16px] m-0">
                  What happens next?
                </Heading>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  <strong>1. Initial Review:</strong> I'll review your project
                  requirements and prepare initial recommendations
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  <strong>2. Consultation Call:</strong> We'll schedule a call
                  to discuss your needs in detail
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  <strong>3. Proposal:</strong> I'll provide a detailed proposal
                  with timeline and pricing
                </Text>
                <Text className="text-[14px] text-gray-700 m-0">
                  <strong>4. Project Kickoff:</strong> Once approved, we'll
                  begin your project
                </Text>
              </Section>

              {/* Contact Information */}
              <Section className="mb-[32px]">
                <Heading className="text-[20px] font-bold text-gray-900 mb-[16px]">
                  Contact Information
                </Heading>
                <Text className="text-[14px] text-gray-700 leading-[1.6] m-0">
                  <strong>Jacob Chademwiri</strong>
                  <br />
                  Tendering & Accounts Receivable Manager | Projects Coordinator
                  <br />
                  SITHEMBE TRANSPORTATION & PROJECTS
                  <br />
                  <br />
                  Email:{' '}
                  <Link
                    href="mailto:hello@jacobc.co.za"
                    className="text-blue-600 no-underline"
                  >
                    hello@jacobc.co.za
                  </Link>
                  <br />
                  LinkedIn:{' '}
                  <Link
                    href="https://linkedin.com/in/jchademwiri"
                    className="text-blue-600 no-underline"
                  >
                    Jacob Chademwiri
                  </Link>
                  <br />
                  Website:{' '}
                  <Link
                    href="https://jacobc.co.za"
                    className="text-blue-600 no-underline"
                  >
                    jacobc.co.za
                  </Link>
                </Text>
              </Section>

              <Text className="text-[16px] text-gray-700 italic text-center mb-[24px]">
                I look forward to discussing how I can help with your{' '}
                {serviceTypeName.toLowerCase()} needs!
              </Text>
            </Section>

            <Hr className="border-gray-200" />

            {/* Footer */}
            <Section className="p-[40px] pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center m-0">
                This is an automated response. I'll personally follow up within
                24-48 hours.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AutoReplyEmail.PreviewProps = {
  firstName: 'Sarah',
  serviceType: 'tender-management',
};

export default AutoReplyEmail;
