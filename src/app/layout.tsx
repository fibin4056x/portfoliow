import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { BlueprintProvider } from '@/context/BlueprintContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FIBIN | MERN & Next.js Full Stack Developer Portfolio',
  description:
    'Architectural Blueprint portfolio of Fibin, a Full Stack MERN & Next.js Developer based in Calicut, India. Specializing in React, Node.js, Express, PostgreSQL, Prisma, MongoDB, REST APIs & Cloud Deployment.',
  keywords: [
    'Fibin',
    'MERN Stack Developer',
    'Next.js Developer',
    'Full Stack Developer Calicut',
    'React.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Portfolio',
  ],
  authors: [{ name: 'Fibin', url: 'https://fibin-portfolio.vercel.app' }],
  creator: 'Fibin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fibin-portfolio.vercel.app',
    title: 'FIBIN | MERN & Next.js Full Stack Developer Portfolio',
    description:
      'Architectural Blueprint portfolio of Fibin, a Full Stack MERN & Next.js Developer based in Calicut, India.',
    siteName: 'Fibin Portfolio Blueprint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIBIN | MERN & Next.js Full Stack Developer Portfolio',
    description:
      'Full Stack MERN & Next.js Developer based in Calicut, India. Explore architectural blueprints and project case studies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F4EFE3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="antialiased min-h-screen selection:bg-[#FF5A1F] selection:text-white">
        <BlueprintProvider>{children}</BlueprintProvider>
      </body>
    </html>
  );
}
