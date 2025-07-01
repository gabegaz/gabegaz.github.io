import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Getachew Abegaz | Data Science Consultant | Portfolio",
  description: "Data science consultant specializing in predictive analytics, machine learning, and AI-driven business strategy. Expert in developing advanced analytics solutions, designing autonomous AI systems, and optimizing data-driven business models to enhance decision-making and drive innovation.",


  keywords: [
    'data science consultant',
    'predictive analytics',
    'machine learning',
    'AI-driven insights',
    'business strategy',
    'statistical modeling',
    'autonomous AI systems',
    'data-driven decision-making',
    'AI-powered automation',
    'big data analytics',
  ],


  authors: [{ name: 'Getachew Abegaz', url: 'https://www.gabegaz.com' }],

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

  // 🔹 Canonical URL (Prevents Duplicate Content Issues)
  alternates: {
    canonical: "https://www.gabegaz.com",
  },

  // 🔹 Open Graph Meta Tags (For LinkedIn, Facebook, etc.)
  openGraph: {
    title: "Getachew Abegaz | Data Science Consultant | Portfolio",
    description: "Data science consultant specializing in predictive analytics, machine learning, and AI-driven business strategy.",
    url: "https://www.gabegaz.com",
    siteName: "Getachew Abegaz",

    images: [
      {
        url: "/og-image.png", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Getachew Abegaz - Data Science Consultant",
      },
    ],
    type: "website",
  },

  // // 🔹 Twitter Card Meta Tags (For Twitter Previews)
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Getachew Abegaz | Data Science Consultant | Portfolio",
  //   description: "Data science consultant specializing in predictive analytics, machine learning, and AI-driven business strategy.",
  //   site: "@yourTwitterHandle",  // Replace with your actual Twitter handle
  //   creator: "@yourTwitterHandle", // Replace with your actual Twitter handle
  //   images: ["/og-image.png"],  
  // },

  // 🔹 Locale and Language Targeting
  // locale: "en_US", // Change if targeting another region (e.g., "en_GB" for UK)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <head>
        {/* Google Analytics for Tracking */}
        <GoogleAnalytics gaId="G-CBZ2TKHSNF" />
      </head>
      <body className="">
        <Navbar />
        <main className="container mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
