import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Listing",
  description: "Test task for React/Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
    <body className="bg-gray-50 text-gray-900 min-h-screen">
    <main className="max-w-6xl mx-auto p-4">{children}</main>
    </body>
    </html>
  );
}
