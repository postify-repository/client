import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postify",
  description: "블로그 포스트를 탐색하고 공유하세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen bg-[#f8f9fa]">
          <div className="max-w-[1300px] mx-auto relative px-4 sm:px-6 lg:px-8">
            {/* 로고, 검색, 알림, 로그인 */}
            <Header />
            {/* 탭 네비게이션 */}
            <Navigation />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
