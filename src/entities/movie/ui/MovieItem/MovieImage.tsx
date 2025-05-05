import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import React, { useState } from "react";
import { IMovieDto } from "../../model/types";

export const MovieImage = ({ movie, isBanner }: { movie: IMovieDto; isBanner?: boolean }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className={`w-full ${isBanner ? "h-[270px]" : ""} `}>
      {!imageLoaded && <Skeleton />}
      <img
        className="w-full h-full object-cover"
        onLoad={() => setImageLoaded(true)}
        src={movie.posterUrlPreview}
        alt={movie.nameOriginal}
      />
    </div>
  );
};
