import { IMovieDetailed, IStaff } from "@/entities/movie";
import MoviesStaffList from "@/entities/staff/ui/MovieStaff/MoviesStaffList";
import Chip from "@/shared/ui/Chip/Chip";
import Loader from "@/shared/ui/Loader/Loader";
import React from "react";

interface Props {
  movie: IMovieDetailed;
  movieStaff: IStaff[] | undefined;
  isPendingSfaff: boolean;
}
const MovieDetailsBody = ({ movie, movieStaff, isPendingSfaff }: Props) => {
  return (
    <div className="flex  flex-col gap-y-12 h-min min-w-0">
      <h2 className="text-4xl md:text-5xl text-center md:text-start">{movie.nameRu}</h2>
      <div className="flex flex-wrap gap-4 ">
        {movie.genres?.map((genre) => (
          <Chip text={genre.genre} key={genre.genre} />
        ))}
      </div>
      <div className="bg-[var(--black75)] p-4 rounded-xl">
        {movie.description ? movie.description : "Описание отсутствует"}
      </div>
      <div>
        <h5 className="text-xl md:text-2xl mb-2">В ролях:</h5>
        {isPendingSfaff && <Loader />}
        <MoviesStaffList staffList={movieStaff} />
      </div>
    </div>
  );
};

export default MovieDetailsBody;
