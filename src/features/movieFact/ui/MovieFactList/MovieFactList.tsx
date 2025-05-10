import { IMovieFact, MovieFact } from "@/entities/fact";
import Loader from "@/shared/ui/Loader/Loader";
import React from "react";

export const MovieFactList = ({ facts, isPending }: { facts: IMovieFact[] | undefined; isPending: boolean }) => {
  if (isPending || !facts) {
    return <Loader />;
  }

  console.log(facts);

  return (
    <div className="mt-4 animate-opacity">
      <div className="min-h-[150px] max-h-[400px] overflow-y-auto mt-2">
        <ul className="list-decimal ml-6 flex flex-col gap-3 text-sm md:text-lg">
          {facts.map((item, i) => (
            <MovieFact fact={item} key={i} />
          ))}
          {facts.length === 0 && <p className="text-center">Фактов не найдено</p>}
        </ul>
      </div>
    </div>
  );
};
