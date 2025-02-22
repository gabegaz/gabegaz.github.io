import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {

  title: "Getachew Abegaz | Data & AI Expert | Portfolio",
  description: "Expert in data-driven decision-making, autonomous AI agents, and data & AI business strategy. Skilled in extracting insights through statistical analysis and machine learning, designing AI-powered solutions for task automation, and crafting innovative business models centered on data and AI to drive revenue, reduce costs, and unlock new value.",
  keywords: [
    'data-driven decision-making',
    'autonomous AI agents',
    'AI business strategy',
    'machine learning',
    'data analysis',
    'business models',
    'AI solutions',
    'task automation',
    'statistical analysis',
    'data insights',
  ],

  authors: [{ name: 'Getachew Abegaz', url: 'https://www.gabegaz.com' }],

  // openGraph: {
  //   title: 'Getachew Abegaz | Data & AI Expert | Portfolio',
  //   description: 'Expert in data-driven decision-making, autonomous AI agents, and data & AI business strategy. Skilled in statistical analysis, machine learning, and crafting innovative business models to drive revenue and unlock new value.',
  //   url: 'https://www.gabegaz.com',
  //   siteName: 'Getachew Abegaz Portfolio',

  //   images: [
  //     {
  //       url: 'https://www.gabegaz.com/og-image.jpg', // Replace with your OpenGraph image URL
  //       width: 1200,
  //       height: 630,
  //       alt: 'Getachew Abegaz - Data & AI Expert',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Getachew Abegaz | Data & AI Expert | Portfolio',
  //   description: 'Expert in data-driven decision-making, autonomous AI agents, and data & AI business strategy. Skilled in statistical analysis, machine learning, and crafting innovative business models to drive revenue and unlock new value.',
  //   images: ['https://www.gabegaz.com/og-image.jpg'],
  // },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon-16x16.png', 
    apple: '/apple-touch-icon.png', 
  },

  metadataBase: new URL('https://www.gabegaz.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className="">
        <Navbar />
        <main className="container mx-auto p-6">
          {children}
          <GoogleAnalytics gaId="G-CBZ2TKHSNF" />
        </main>
      </body>
    </html>
  );
}