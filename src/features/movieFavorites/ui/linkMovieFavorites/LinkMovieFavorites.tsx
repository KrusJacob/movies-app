"use client";
import Link from "next/link";
import React from "react";
import { MdFavorite } from "react-icons/md";

const LinkMovieFavorites = () => {
  return (
    <div className="">
      <Link
        href="/favorites"
        className="flex gap-2 items-center bg-[var(--darkblue)] px-4 h-10 md:h-11 rounded border-white border text-white hover:text-[var(--blueColor)] text-xl"
      >
        <span className="md:block hidden">Избранное</span>
        <MdFavorite />
      </Link>
    </div>
  );
};

export default LinkMovieFavorites;
