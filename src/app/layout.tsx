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
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-poppins antialiased bg-white text-gray-900 transition-colors duration-200`}>
        <NavbarComponent />
        <main>{children}</main>
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>   
  );
}
