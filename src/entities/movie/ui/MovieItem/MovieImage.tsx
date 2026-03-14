import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import React, { useState } from "react";
import { IMovieDto } from "../../model/types";

interface Props {
  movie: IMovieDto;
  isBanner?: boolean;
  onHover?: boolean;
}

export const MovieImage = ({ movie, isBanner, onHover }: Props) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className={`w-full ${isBanner ? "h-[270px]" : ""} overflow-hidden relative `}>
      {!imageLoaded && <Skeleton />}
      <img
        className={`${onHover ? "scale-105" : ""} "w-full h-full object-cover duration-300 transition-all"`}
        onLoad={() => setImageLoaded(true)}
        src={movie.posterUrlPreview}
        alt={movie.nameOriginal}
      />
    </div>
  );
};
