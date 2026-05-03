import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "InfmaxAI — Infinite Intelligence, Launching Soon",
  description: "InfmaxAI is the next-generation AI platform built for infinite scale. Join the waitlist and be first in line.",
  keywords: ["AI", "artificial intelligence", "InfmaxAI", "launching soon", "waitlist"],
  openGraph: {
    title: "InfmaxAI — Infinite Intelligence",
    description: "The AI platform of tomorrow, launching soon.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
