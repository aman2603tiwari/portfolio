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
  title: "Aman Tiwari | AI Systems Engineer",
  description:
    "IIT Roorkee student building intelligent systems at the intersection of AI, robotics, and embedded engineering. Portfolio showcasing computer vision, ML, and robotics projects.",
  keywords: [
    "Aman Tiwari",
    "IIT Roorkee",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Robotics",
    "Portfolio",
  ],
  authors: [{ name: "Aman Tiwari" }],
  openGraph: {
    title: "Aman Tiwari | AI Systems Engineer",
    description:
      "Building intelligent systems at the intersection of AI, robotics, and embedded engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
