import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "boostUA",
  description: "Full-stack application with Next.js and Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
