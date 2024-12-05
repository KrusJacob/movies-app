import Skeleton from "@/components/UI/Skeleton/Skeleton";
import { IUnifiedMovie } from "@/types/movie";
import React, { useState } from "react";

const MovieItemImage = ({ movie }: { movie: IUnifiedMovie }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className="w-full">
      {!imageLoaded && <Skeleton />}
      <img onLoad={() => setImageLoaded(true)} src={movie.posterUrlPreview} alt={movie.nameOriginal} />
    </div>
  );
};

export default MovieItemImage;
