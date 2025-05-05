"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Pagination from "@/shared/ui/Pagination/Pagination";
import Loader from "@/shared/ui/Loader/Loader";
import { MoviesList, getAllMovies } from "@/widgets/movie";

const MoviesPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || "1";
  const search = searchParams?.get("search") || "";
  const { data, isPending, isError } = getAllMovies(page, search);

  if (isError) {
    throw new Error("Something went wrong!");
  }

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <Pagination totalPages={data?.totalPages} currentPage={parseInt(page)} />
          {data?.movies && <MoviesList movies={data.movies} />}
          <Pagination totalPages={data?.totalPages} currentPage={parseInt(page)} />
        </div>
      )}
    </>
  );
};

export default MoviesPage;
