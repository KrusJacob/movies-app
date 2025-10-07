import Footer from "@/shared/ui/Footer/Footer";
import Header from "@/shared/ui/Header/Header";
import TanstackProvider from "@/shared/providers/TanstackProvider";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import { ThreeBackground } from "@/shared/ui/ThreeBackground/ThreeBackground";

const inter = Comfortaa({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "ФильмФан",
  description: "Смотри только лучшие фильмы",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ThreeBackground />
        </TanstackProvider>
      </body>
    </html>
  );
}
