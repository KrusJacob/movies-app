import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TanstackProvider from "@/components/providers/TanstackProvider";

import type { Metadata } from "next";
import { Inter, Itim, Roboto, Amatic_SC, Comfortaa } from "next/font/google";
import "./globals.css";

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
        </TanstackProvider>
      </body>
    </html>
  );
}
