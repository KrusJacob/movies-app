import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-center  px-4 max-w-[1000px] m-auto mt-10">
      <h1 className="text-[50px] lg:text-[120px] font-bold">ФильмФан</h1>
      <p className="text-base lg:text-xl">
        Добро пожаловать на ФильмФан! Здесь вы найдете все, что нужно настоящему киноману. Мы собрали для вас
        огромную коллекцию фильмов всех жанров и эпох. На нашем сайте вы сможете: Узнавать последние новости из
        мира кино. Просматривать список популярных фильмов. Мы регулярно обновляем наш каталог, чтобы вы всегда
        могли найти самые актуальные и интересные фильмы. Независимо от того, любите ли вы драмы, комедии, боевики
        или документальные фильмы, у нас есть что предложить.
      </p>

      <div className="text-lg md:text-2xl mt-16 bg-[var(--darkblue)] border rounded-xl px-6 py-2 w-max m-auto group hover:text-[var(--blueColor)] duration-300">
        <Link href="/movies?page=1">Перейти к фильмам →</Link>
      </div>
    </div>
  );
};

export default HomePage;
