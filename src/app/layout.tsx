import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs-Basics",
  description: "basics of nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <Suspense fallback={<p className="text-center mt-5 text-3xl font-bold">Loading...</p>}> */}
        {children}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
