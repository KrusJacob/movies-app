import { IMovieFact } from "@/entities/fact";
import { MovieFactList } from "@/features/movieFact";
import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";

const MovieFacts = ({ facts, isFacts }: { facts: IMovieFact[] | undefined; isFacts: boolean }) => {
  if (!facts?.length) return null;

  return (
    <div className="mt-32">
      <div className="text-xl md:text-2xl font-bold mb-4 flex gap-4 items-center">
        <div className="border-2 border-white rounded-full p-1 flex justify-center items-center w-min">
          <MdOutlineQuestionMark />
        </div>
        Факты о фильме <span className="text-sm">(могут быть спойлеры!)</span>
      </div>
      <MovieFactList facts={facts} isPending={isFacts} />
    </div>
  );
};

export default MovieFacts;
