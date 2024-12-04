"use client";

import { IMovieById } from "@/types/movieSingle";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../UI/Button/Button";

import MovieById from "../entities/movies/byId/MovieById";

const MovieByIdPage = ({ movie }: { movie: IMovieById }) => {
  const router = useRouter();
  return (
    <div className="max-w-[1500px]  m-auto  py-4 px-3">
      <Button onClick={() => router.back()}> ← Назад</Button>
      <MovieById movie={movie} />
    </div>
  );
};

export default MovieByIdPage;
