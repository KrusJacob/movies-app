import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TanstackProvider from "@/components/providers/tanstackProvider";

import type { Metadata } from "next";
import { Inter, Itim, Roboto, Amatic_SC, Comfortaa } from "next/font/google";
import "./globals.css";

const inter = Comfortaa({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Movies app",
  description: "Смотри только лучше фильмы",
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
