import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Getachew Abegaz | Strategic Architecture & Economic Strategy",
  description: "Computer Scientist (MSc) & Economist (MSc) with 20+ years of experience bridging technical architecture and economic strategy to scale markets. Founder of Bitawd.",
  keywords: [
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
  authors: [{ name: 'Getachew Abegaz', url: 'https://www.gabegaz.com' }],
  creator: "Getachew Abegaz",
  publisher: "Getachew Abegaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Getachew Abegaz | Strategic Architecture & Economic Strategy",
    description: "Bridging technical architecture and economic strategy to scale markets in Ethiopia and beyond. Founder of Bitawd.",
    url: "https://www.gabegaz.com",
    siteName: "Getachew Abegaz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Getachew Abegaz - Strategic Architecture & Economic Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getachew Abegaz | Strategic Architecture & Economic Strategy",
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
  return (
    <html lang="en" className="dark">
      <head>
        <GoogleAnalytics gaId="G-CBZ2TKHSNF" />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Subtle background gradient for "Strategic" feel */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>
          
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="py-4 border-t border-muted/10 bg-card/50">
            <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Getachew Abegaz. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
