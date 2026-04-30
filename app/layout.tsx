import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Getachew Ahmed Abegaz | Advisor on Policy · Technology · Data Strategy",
  description: "Getachew Ahmed Abegaz is a Computer Scientist (MSc) & Economist (MSc) with 20+ years of experience bridging technical architecture and economic strategy to scale markets. Founder of Bitawd.",
  keywords: [
    'Getachew Ahmed Abegaz',
    'Getachew Ahmed',
    'Getachew Abegaz',
    'Strategic Architecture',
    'Economic Strategy Ethiopia',
    'Computer Scientist Economist',
    'Bitawd Founder',
    'Data Strategy Ethiopia',
    'Macroeconomic Intelligence',
    'Market Intelligence Systems',
    'AI Strategy emerging markets',
    'Startup Validator AI',
    'Institutional Intelligence'
  ],
  authors: [{ name: 'Getachew Ahmed Abegaz', url: 'https://www.gabegaz.com' }],
  creator: "Getachew Ahmed Abegaz",
  publisher: "Getachew Ahmed Abegaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Getachew Ahmed Abegaz | Strategic Architecture & Economic Strategy",
    description: "Bridging technical architecture and economic strategy to scale markets in Ethiopia and beyond. Founder of Bitawd.",
    url: "https://www.gabegaz.com",
    siteName: "Getachew Ahmed Abegaz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Getachew Ahmed Abegaz - Strategic Architecture & Economic Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getachew Ahmed Abegaz | Strategic Architecture & Economic Strategy",
    description: "Bridging technical architecture and economic strategy to scale markets. Founder of Bitawd.",
    images: ["/og-image.png"],
    creator: "@gabegaz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.gabegaz.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Getachew Ahmed Abegaz",
    "alternateName": ["Getachew Ahmed", "Getachew Abegaz"],
    "url": "https://www.gabegaz.com",
    "image": "https://www.gabegaz.com/og-image.png",
    "sameAs": [
      "https://www.linkedin.com/in/gabegaz/",
      "https://twitter.com/gabegaz"
    ],
    "jobTitle": "Advisor on Policy · Technology · Data Strategy",
    "worksFor": {
      "@type": "Organization",
      "name": "Bitawd"
    },
    "description": "Computer Scientist (MSc) & Economist (MSc) with 20+ years of experience bridging technical architecture and economic strategy to scale markets."
  };

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-CBZ2TKHSNF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <div className="relative min-h-screen flex flex-col">
          {/* High-contrast background for DaisyUI Light feel */}
          <div className="fixed inset-0 z-[-1] bg-white">
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle_at_top_right,rgba(87,10,242,0.05)_0%,transparent_70%)]"></div>
          </div>
          
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="py-4 border-t border-muted/10 bg-card/50">
            <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Getachew Ahmed Abegaz. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
