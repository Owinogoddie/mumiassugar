import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mumias Sugar Company | Sweetening Lives, Naturally",
  description: "Mumias Sugar Company is Kenya's premier sugar manufacturer, delivering high-quality sugar products and contributing to sustainable agriculture since 1971.",
  keywords: "Mumias Sugar, sugar production, Kenya sugar, sustainable agriculture, sugar products",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-right" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
