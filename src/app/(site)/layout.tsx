import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Jacob chademwiri Web Developer in Centurion',
    template: '%s | Web Developer in Centurion',
  },
  description:
    'Jacob Chademwiri builds fast, modern websites with Next.js & CMS integrations—focused on clean code, great UX, and scalable performance.',
  keywords: [
    'jacobc.co.za',
    'coming soon',
    'website launch',
    'jacobc',
    'Jacob C',
    'new website',
    'website development',
    'web design',
    'web development',
    'web developer',
    'Centurion',
  ],
  authors: [{ name: 'Jacob Chademwiri', url: 'https://jacobc.co.za' }],
  creator: 'Jacob Chademwiri',
  metadataBase: new URL('https://jacobc.co.za'),
  openGraph: {
    title: 'Web Developer & Project Manager',
    description:
      'Jacob Chademwiri builds fast, modern websites with Next.js & CMS integrations—focused on clean code, great UX, and scalable performance.',
    url: 'https://jacobc.co.za',
    siteName: 'jacobc.co.za',
    images: [
      {
        url: '/opengraph-image.jpg', // Place this image in the public/ folder
        width: 1200,
        height: 630,
        alt: 'jacobc.co.za – Web Developer & Project Manager',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer & Project Manager',
    description:
      'Jacob Chademwiri builds fast, modern websites with Next.js & CMS integrations—focused on clean code, great UX, and scalable performance.',
    creator: '@jchademwiri',
    images: ['/twitter-image.jpg'],
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
      <SpeedInsights />
      <Analytics />
    </>
  );
}
