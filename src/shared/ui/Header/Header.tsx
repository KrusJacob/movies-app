"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Главная", src: "/" },
  { label: "Фильмы", src: "/movies" },
  { label: "Новости", src: "/news" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-4 md:py-6 px-4 xl:px-32 text-center">
      <nav className="flex gap-4 md:gap-12 text-xl md:text-2xl justify-center">
        <Link className="mr-auto hidden md:block md:text-4xl " href="/">
          ФильмФан
        </Link>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.src;
          return (
            <Link key={link.label} className={isActive ? "active link" : "link"} href={link.src}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
