import { IMovieFact, MovieFact } from "@/entities/fact";
import Loader from "@/shared/ui/Loader/Loader";
import React from "react";

export const MovieFactList = ({ facts, isPending }: { facts: IMovieFact[]; isPending: boolean }) => {
  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mt-4 animate-opacity">
      <div className="min-h-[150px] max-h-[500px] overflow-y-auto mt-2">
        <ul className="list-decimal ml-6 flex flex-col gap-3 text-sm md:text-base">
          {facts.map((item, i) => (
            <MovieFact fact={item} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};
