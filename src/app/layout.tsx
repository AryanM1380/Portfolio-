import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import React from 'react';
import NavbarComponent from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Mohammadi | Full Stack Developer",
  description: "Portfolio website of Aryan Mohammadi - Full Stack Developer, Data Analyst, and Machine Learning Developer",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'msvalidate.01': '6E1770B1687178860721FE9D412194ED'
  }
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`
          ${playfair.variable} 
          ${poppins.variable} 
          font-poppins 
          antialiased 
          bg-gradient-to-br 
          from-gray-50 
          to-gray-100 
          dark:from-gray-900 
          dark:to-gray-800 
          text-gray-900 
          dark:text-gray-100 
          transition-all 
          duration-300
          min-h-screen
        `}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(99,102,241,0.1),rgba(0,0,0,0))]" />
        <div className="relative">
          <NavbarComponent />
          <main className="relative z-10 animate-fadeIn">
            {children}
          </main>
          <ScrollToTop />
          <SpeedInsights />
        </div>
      </body>
    </html>   
  );
}
