import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magic Marble Foundation",
  description: "Magic Marble Foundation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "linear-gradient(to bottom, rgba(0, 0, 0, .8), transparent)",
            width: "100%",
            height: "160px",
          }}
        ></div>
        <Header />

        {children}
      </body>
    </html>
  );
}
