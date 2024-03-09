import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "전시회 스케쥴",
  description: "전시회 스케쥴을 보여주는 웹 페이지",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/gallery.svg",
        href: "/gallery.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/gallery.svg",
        href: "/gallery.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
