"use client";
import MovieItem from "@/components/MovieItem";
import { fetchMovies } from "@/services/fetchMovies";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IMovie } from "@/types/movie";
import { Metadata } from "next";
import Button from "@/components/Button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Search from "@/components/Search";
import { fetchAllMovies } from "@/hooks/useQuery";

const metadata: Metadata = {
  title: "Фильмы | Movies app",
};

const Movies = () => {
  const [page, setPage] = useState<number>(1);
  const [temp, setTemp] = useState<string>("");

  const { data, isLoading, isError } = fetchAllMovies(page);

  useEffect(() => {}, [isLoading]);

  let pageOnSearch = 0;

  useEffect(() => {
    client.invalidateQueries({ queryKey: ["movies", page] });
  }, [page]);

  const client = useQueryClient();

  return (
    <>
      <div className="max-w-[1500px] m-auto py-5 flex flex-wrap gap-5 justify-center">
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          <>
            <Search changeTemp={setTemp} />
            {data?.movies.map((movie: IMovie) => {
              if (temp) {
                if (
                  movie.nameRu?.toLowerCase().includes(temp) ||
                  movie.nameOriginal?.toLowerCase().includes(temp)
                ) {
                  pageOnSearch++;
                  console.log(pageOnSearch);
                  return <MovieItem key={movie.kinopoiskId} movie={movie} />;
                }
              } else {
                return <MovieItem key={movie.kinopoiskId} movie={movie} />;
              }
            })}
          </>
        )}

        {!isLoading && !data?.movies.length && <div>Фильмы не найдены</div>}
      </div>
      {!isLoading && <MoviesPagination page={page} totalPages={temp ? 1 : data?.totalPages} setPage={setPage} />}
    </>
  );
};

type MoviesPaginationProps = {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const MoviesPagination = ({ page, totalPages, setPage }: MoviesPaginationProps) => {
  return (
    <div className="flex gap-5 my-2 justify-center">
      <>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Предыдущая
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Следующая
        </Button>
      </>
    </div>
  );
};

export default Movies;
