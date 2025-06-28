"use client";

import Loader from "@/shared/ui/Loader/Loader";
import React from "react";
import ReactPlayer from "react-player";
import { useMovieTrailer } from "../model/useMovieTrailer";

export const MovieMediaPlayer = ({ id }: { id: string }) => {
  const { isLoading, error, trailerUrl, setError } = useMovieTrailer(id);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div className="text-xl flex justify-center items-center h-[200px] border bg-black bg-opacity-75">
          {error}
        </div>
      ) : (
        <div style={{ position: "relative", paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}>
          <ReactPlayer
            url={trailerUrl}
            controls={true}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            onError={() => setError("Failed to load video.")}
          />
        </div>
      )}
    </div>
  );
};
