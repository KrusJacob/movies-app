import { IStaff } from "@/entities/movie";
import React from "react";
import MovieStaffItem from "./MovieStaffItem";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

const MoviesStaffList = ({ staffList }: { staffList: IStaff[] | undefined }) => {
  if (!staffList) return null;
  const actors = staffList.filter((staff) => staff.professionKey === "ACTOR").slice(0, 15);

  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 3,
        },
        478: {
          slidesPerView: 5,
        },
        767: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1140: {
          slidesPerView: 6,
        },
        1340: {
          slidesPerView: 7,
        },
      }}
      spaceBetween={2}
    >
      {actors.map((staff) => (
        <SwiperSlide key={staff.staffId}>
          <MovieStaffItem staff={staff} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesStaffList;
