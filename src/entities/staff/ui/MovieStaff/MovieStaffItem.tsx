import { IStaff } from "@/entities/movie";
import React from "react";

const MovieStaffItem = ({ staff }: { staff: IStaff }) => {
  return (
    <div className="">
      <img
        className="w-[100px] h-[150px] md:w-[140px] md:h-[200px] object-cover rounded"
        src={staff.posterUrl}
        alt={staff.nameRu || staff.nameEn}
      />
      <p className="text-xs mt-1">{staff.nameRu || staff.nameEn}</p>
    </div>
  );
};

export default MovieStaffItem;
