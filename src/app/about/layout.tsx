import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "О нас | Movies app",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1000px] m-auto px-4">
      <h2 className="text-3xl md:text-5xl">О нас</h2>
      {children}
    </div>
  );
};

export default AboutLayout;
