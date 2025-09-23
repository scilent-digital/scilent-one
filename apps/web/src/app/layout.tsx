import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { initOpenTelemetry } from '../lib/otel';

// Import test function (only runs in development)
if (process.env.NODE_ENV === 'development') {
  import('../lib/test-tracing');
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Scilent One - Digital Project Template',
  description:
    'A modern web application template built with Next.js, React, TypeScript, Tailwind CSS, and Turborepo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize OpenTelemetry on the server
  if (typeof window === 'undefined') {
    initOpenTelemetry();
  }

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
