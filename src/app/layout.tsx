import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // Dodaj wagę, np. 400
});

export const metadata: Metadata = {
  title: "Quick ADHD Self-Test",
  description:
    "Do you know your ADHD type? Discover common symptoms of ADHD. Early recognition can make all the difference. Start now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16710782969`}
          strategy="afterInteractive" // Wstaw skrypt po interakcji użytkownika
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16710782969');
        `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
