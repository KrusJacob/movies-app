"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MovieDetails } from "@/widgets/movie";
import Button from "@/shared/ui/Button/Button";
import { IMovieDetailed } from "@/entities/movie";

const MovieDetailedPage = ({ movie }: { movie: IMovieDetailed }) => {
  const router = useRouter();
  return (
    <div className="max-w-[1500px]  m-auto  py-4 px-3">
      <Button onClick={() => router.back()}> ← Назад</Button>

      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailedPage;
