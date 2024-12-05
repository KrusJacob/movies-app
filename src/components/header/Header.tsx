import React from "react";
import Navigation from "./Navigation";

const navLinks = [
  { label: "Главная", src: "/" },
  { label: "Новости", src: "/news" },
  { label: "Фильмы", src: "/movies" },
];

const Header = () => {
  return (
    <div className="w-full py-4 md:py-8 px-4 xl:px-20 text-center">
      <Navigation navLinks={navLinks} />
    </div>
  );
};

export default Header;
