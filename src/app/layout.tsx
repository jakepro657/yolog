import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "여록",
  description: "여행의 모든 순간, 나만의 이야기로 물들이다",
  manifest: "/manifest.json",
  themeColor: "#dffffff",
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
    <html lang="ko">
      <body className={inter.className}>
        <div className="relative overflow-y-scroll h-screen w-screen bg-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
