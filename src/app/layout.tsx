import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "여록",
  description: "여행의 모든 순간, 나만의 이야기로 물들이다",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    other: [
      {
        url: "/icon/logo.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
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
      <body className={inter.className}>
        <div className="relative left-1/2 -translate-x-1/2 top-0 h-screen w-screen sm:w-[500px]">
          {children}
        </div>
      </body>
    </html>
  );
}
