"use client";
import Button from "@/components/Button";
import { fetchTrailerById } from "@/services/fetchMovies";

import React from "react";

const MovieTrailer = ({ id }: { id: string }) => {
  const getTrailer = async () => {
    const trailers = await fetchTrailerById(id);
    let trailerUrl = trailers.items[0].url;
    let flag = 1;
    while (trailerUrl.includes(".mp4")) {
      trailerUrl = trailers.items[flag++]?.url;
    }
    trailerUrl ? openInNewTab(trailerUrl) : alert("Трейлер не найден");
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex justify-center gap-4 h-[500px] items-center border bg-black bg-opacity-40">
      <Button onClick={getTrailer}>Смотреть трейлер</Button>
      <Button>Смотреть Фильм</Button>
    </div>
  );
};

export default MovieTrailer;
