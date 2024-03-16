import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import VhProvider from "@/components/VhProvider";
import { Suspense } from "react";

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

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Suspense>
          <VhProvider>
            <Background>{children}</Background>
          </VhProvider>
        </Suspense>
      </body>
    </html>
  );
}
