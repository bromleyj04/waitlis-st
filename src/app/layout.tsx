import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "waitlis.st | Validation waitlists for serious ideas",
  description:
    "Launch a minimal Validation waitlist with survey, referrals, Notion-ready prospects, and clean deployment.",
  metadataBase: new URL("https://waitlis.st"),
  openGraph: {
    title: "waitlis.st",
    description:
      "A hosted path around the open-source ExitOS Waitlist Kit for validating demand before building too much.",
    url: "https://waitlis.st",
    siteName: "waitlis.st",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
