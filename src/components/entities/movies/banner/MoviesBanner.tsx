"use client";
import { IUnifiedMovie } from "@/types/movie";
import MovieItem from "../item/MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import BannerCard from "./BannerCard";

const MoviesBanner = ({ movies }: { movies?: IUnifiedMovie[] }) => {
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
        {movies.map((movie: IUnifiedMovie) => {
          return (
            <SwiperSlide key={movie.id}>
              <BannerCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MoviesBanner;
