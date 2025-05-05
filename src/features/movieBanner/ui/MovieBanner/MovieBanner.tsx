"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import MovieBannerCard from "@/entities/movie/ui/MovieBannerCard/MovieBannerCard";
import { IMovieDto } from "@/entities/movie";

const MovieBanner = ({ movies }: { movies?: IMovieDto[] }) => {
  if (!movies) {
    return null;
  }

  return (
    <div className="mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={5}
        breakpoints={{
          340: {
            slidesPerView: 2,
          },
          620: {
            slidesPerView: 3,
          },
          820: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay={{ delay: 3000 }}
      >
        {movies.map((movie: IMovieDto) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieBannerCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieBanner;
