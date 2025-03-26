import { IUnifiedMovie } from "@/types/movie";
import Link from "next/link";
import React from "react";
import MovieItemImage from "../item/MovieItemImage";

const BannerCard = ({ movie }: { movie: IUnifiedMovie }) => {
  return (
    <div className="border bg-white relative flex items-center justify-center w-[180px]">
      <Link href={`/movies/${movie.id}`}>
        <MovieItemImage movie={movie} isBanner />
      </Link>
    </div>
  );
};

export default BannerCard;
