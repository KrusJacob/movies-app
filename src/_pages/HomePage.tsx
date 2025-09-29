"use client";
import Link from "next/link";
import React from "react";
import Loader from "../shared/ui/Loader/Loader";
import { getAllMovies } from "@/widgets/movie";
import { MovieBanner } from "@/features/movieBanner";

const HomePage = () => {
  const { data, isPending } = getAllMovies("1");

  return (
    <div className="text-center px-4 max-w-[1000px] m-auto mt-6">
      <h1 className="text-[50px] lg:text-[100px] font-bold">ФильмФан</h1>
      <p className="text-sm lg:text-xl  bg-[var(--black75)]  rounded-xl p-4">
        Добро пожаловать на ФильмФан! Здесь вы найдете все, что нужно настоящему киноману. Мы собрали для вас
        огромную коллекцию фильмов всех жанров и эпох. На нашем сайте вы сможете узнавать последние новости из мира
        кино, просматривать список популярных фильмов и узнать интересные факты о них.
      </p>

      {isPending ? <Loader /> : <MovieBanner movies={data?.movies} />}

      <div className="text-lg md:text-2xl mt-8 bg-[var(--darkblue)] border rounded-xl px-6 py-2 w-max m-auto group hover:text-[var(--blueColor)] duration-300">
        <Link href="/movies?page=1">Перейти к фильмам →</Link>
      </div>
    </div>
  );
};

export default HomePage;
