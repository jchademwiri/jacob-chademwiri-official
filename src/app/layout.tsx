import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    title: 'Website Developer in Centurion, South Africa',
    description:
      'Jacob Chademwiri builds fast, modern websites with Next.js & CMS integrations—focused on clean code, great UX, and scalable performance.',
    url: 'https://jacobc.co.za',
    siteName: 'jacobc.co.za',
    images: [
      {
        url: '/opengraph-image.jpg', // Place this image in the public/ folder
        width: 1200,
        height: 630,
        alt: 'jacobc.co.za – Coming Soon',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon | jacobc.co.za',
    description:
      'Jacob Chademwiri builds fast, modern websites with Next.js & CMS integrations—focused on clean code, great UX, and scalable performance.',
    creator: '@jchademwiri',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground system`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
