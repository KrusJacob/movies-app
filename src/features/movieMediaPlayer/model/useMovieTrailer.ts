import { ITrailer } from "@/entities/movie";
import { fetchTrailerById } from "@/entities/movie/api";
import { useEffect, useState } from "react";

const getValidTrailer = (trailers: ITrailer[]) => {
  return trailers.find((item) => item.site === "YOUTUBE");
};

export const useMovieTrailer = (id: string) => {
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
          const validTrailer = getValidTrailer(data.items);
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

  return { trailerUrl, isLoading, error, setError };
};
