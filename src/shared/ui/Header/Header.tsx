"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Главная", src: "/" },
  { label: "Новости", src: "/news" },
  { label: "Фильмы", src: "/movies" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-4 md:py-6 px-4 xl:px-20 text-center">
      <nav className="flex gap-4 md:gap-20 text-xl md:text-3xl justify-center">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.src;
          return (
            <Link key={link.label} className={isActive ? "active" : ""} href={link.src}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
