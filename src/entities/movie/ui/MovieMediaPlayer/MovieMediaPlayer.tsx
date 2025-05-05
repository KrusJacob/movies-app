"use client";

import Loader from "@/shared/ui/Loader/Loader";
import { fetchTrailerById } from "@/entities/movie/api";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const MovieMediaPlayer = ({ id }: { id: string }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTrailerById(id);
        if (data.items && data.items.length > 0) {
          const validTrailer = data.items.find((item) => item.site === "YOUTUBE");
          if (validTrailer) {
            setTrailerUrl(validTrailer.url);
          } else {
            setError("Нет данных по трейлеру");
          }
        }
      } catch (error) {
        setError("Нет данных по трейлеру");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

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
