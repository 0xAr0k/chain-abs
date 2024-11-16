import type { Metadata } from "next";
import localFont from "next/font/local";
import { Chivo_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Based Chain Abstraction",
  description: "Based.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <Providers>
            <SiteHeader />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
