import "@/app/globals.css";
import Container from "@/components/common/Container";
import Header from "@/components/layout/header";
import TanStackProvider from "@/providers/TanStackProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  description: "개발자를 위한 블로그 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-page text-primary`}
      >
        <TanStackProvider>
          <Container>
            <Header />
            <main>{children}</main>
          </Container>
        </TanStackProvider>
      </body>
    </html>
  );
}
