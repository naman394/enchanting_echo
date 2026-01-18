import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VyaktAI - Generative AI Data Engine",
  description: "High-precision data labeling and RLHF services for the next generation of AI models. Powered by expert human intelligence.",
  keywords: ["Data Labeling", "RLHF", "AI", "Machine Learning", "Computer Vision", "NLP", "VyaktAI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen bg-black text-foreground overflow-x-hidden font-sans selection:bg-blue-500/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
