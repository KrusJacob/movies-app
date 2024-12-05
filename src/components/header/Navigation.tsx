"use client";

import { INavLink } from "@/types/navItems";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavigationProps = {
  navLinks: INavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 md:gap-20 text-xl md:text-3xl justify-center">
      {navLinks.map((link) => {
        const isActive = pathname === link.src;
        return (
          <Link key={link.label} className={isActive ? "active" : ""} href={link.src}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
