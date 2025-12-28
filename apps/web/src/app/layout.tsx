import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

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
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className='min-h-dvh bg-background text-foreground'>
            <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
              <Link href='/' className='font-semibold'>
                Scilent One
              </Link>
              {/* Simple header with theme toggle */}
              <div className='flex items-center gap-4'>
                <Link
                  href='/styles'
                  className='text-sm text-muted-foreground hover:underline'
                >
                  Styles
                </Link>
                <Link
                  href='/components'
                  className='text-sm text-muted-foreground hover:underline'
                >
                  Components
                </Link>
                <ThemeToggle />
              </div>
            </div>
            <div className='container mx-auto px-4 pb-12'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
