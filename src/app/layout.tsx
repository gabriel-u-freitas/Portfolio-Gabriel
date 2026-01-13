import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gabriel U. de Freitas | Portfolio",
  description: "Analista de M&A e Marketing Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans min-h-screen bg-grid-pattern")}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
