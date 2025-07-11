import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Container from "@/components/layout/Container";

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
          <Container>
            {/* 로고, 검색, 알림, 로그인 */}
            <Header />
            {/* 탭 네비게이션 */}
            <Navigation />
            <main>{children}</main>
          </Container>
        </div>
      </body>
    </html>
  );
}
