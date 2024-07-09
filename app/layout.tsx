import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";


const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],


});

export const metadata: Metadata = {
  title: "Medoc",
  description: "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={cn(
        "min-h-screen bg-dark-300 inter antialiased",
        inter.className
        )}
        >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
          
        
        
        </body>
    </html>
  );
}
