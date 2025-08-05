// src/app/[employmentId]/page.tsx

import { EmploymentDetails } from '@/components/current-employment/employment-details';
import { currentPositions } from '@/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Update the PageProps interface to use Promise for params
type PageProps = {
  params: Promise<{
    employmentId: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params for both employment positions
export async function generateStaticParams() {
  return currentPositions.map((position) => ({
    employmentId: position.id,
  }));
}

// Update the metadata function with proper typing and await params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { employmentId } = await params;
  const position = currentPositions.find((pos) => pos.id === employmentId);

  if (!position) {
    return {
      title: 'Position Not Found',
    };
  }

  return {
    title: `${position.company} - ${position.title} | Jacob C`,
    description: position.description,
    openGraph: {
      title: `${position.company} - ${position.title}`,
      description: position.description,
      type: 'article',
    },
  };
}

// Update the page component to await params
export default async function EmploymentDetailsPage({ params }: PageProps) {
  const { employmentId } = await params;
  const position = currentPositions.find((pos) => pos.id === employmentId);

  if (!position) {
    notFound();
  }

  return <EmploymentDetails positionId={employmentId} />;
}
