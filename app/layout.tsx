import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "Gabegaz",
  description: "Data Analytics Consultant Portfolio",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className="">
        <Navbar />
        <main className="container mx-auto p-6">{children}
        <GoogleAnalytics gaId="G-CBZ2TKHSNF" />
        </main>
      </body>
    </html>
  );
}
