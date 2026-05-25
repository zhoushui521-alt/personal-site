import type { Metadata } from "next";
import SceneLoader from "@/components/three/scene-loader";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel | AI Native",
  description: "AI Native 数字空间",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="h-full bg-bg text-text-primary antialiased">
        <SceneLoader />
        <Nav />
        <PageTransition>
          <main className="pt-14">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
