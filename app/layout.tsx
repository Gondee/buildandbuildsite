import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://buildandbuildsite.vercel.app'),
  title: "Build and Build Co - BNB Access for US Investors",
  description: "Providing institutional-grade access to Binance Smart Chain (BNB) in the United States through fully compliant investment vehicles.",
  keywords: "BNB, Binance Smart Chain, BSC, cryptocurrency, investment, United States, compliant, institutional",
  openGraph: {
    title: "Build and Build Co - BNB Access for US Investors",
    description: "Institutional-grade access to Binance Smart Chain in the United States",
    type: "website",
    siteName: "Build and Build Co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build and Build Co - BNB Access for US Investors",
    description: "Institutional-grade access to Binance Smart Chain in the United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bsc-dark`}
      >
        {children}
      </body>
    </html>
  );
}
