import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export const metadata: Metadata = {
title: "Lokesh Singh Tanwar | Software Developer",
  description:
    "Lokesh Singh Tanwar – Full-Stack (MERN) Professional, Android App Developer, and Technical Blogger. Passionate about building scalable web applications, writing tech blogs, and exploring modern technologies.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
