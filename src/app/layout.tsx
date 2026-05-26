import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AmbientBg from "@/components/ambient-bg";
import SmoothScroll from "@/components/lenis";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Daniel | AI Native Engineer",
    template: "%s | Daniel",
  },
  description:
    "AI Native 技术作品集。从 Linux 运维到昇腾 Atlas 900，从车载中控到 AI Workflow——系统工程的确定性 × AI 开发的想象力。",
  keywords: ["AI Native", "Portfolio", "Infrastructure", "Embedded", "Full Stack"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="h-full bg-bg text-text-primary antialiased">
        <AmbientBg />
        <Nav />
        <SmoothScroll>
          <PageTransition>
            <main className="pt-14">{children}</main>
          </PageTransition>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
