import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme/ThemeContext";
import PatternBackground from "@/components/PatternBackGround";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dácz Krisztián",
  description: "Personal webpage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`font-mono antialiased`}
      >
        <ThemeProvider>
          <PatternBackground>
            {children}
          </PatternBackground>
          
          </ThemeProvider>
      </body>
    </html>
  );
}
