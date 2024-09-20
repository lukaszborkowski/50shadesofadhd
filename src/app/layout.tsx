import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // Dodaj wagę, np. 400
});

export const metadata: Metadata = {
  title: "50 Shades of ADHD",
  description: "Twierdza Bar - Moc Fortecy, Brzmienie Rocka",
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
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
