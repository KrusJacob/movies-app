import Skeleton from "@/components/UI/Skeleton/Skeleton";
import { IUnifiedMovie } from "@/types/movie";
import React, { useState } from "react";

const MovieItemImage = ({ movie, isBanner }: { movie: IUnifiedMovie; isBanner?: boolean }) => {
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

export default MovieItemImage;
