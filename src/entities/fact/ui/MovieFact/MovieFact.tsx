import React from "react";
import { IMovieFact } from "../../model/types";

const stripTags = (html: string) => {
  return html.replace(/<[^>]*>/g, "");
};
const MovieFact = ({ fact }: { fact: IMovieFact }) => {
  const isSpoiler = fact.spoiler ? "(Спойлер!!!) " : "";
  return (
    <li>
      {isSpoiler}
      {stripTags(fact.text)}
    </li>
  );
};

export default MovieFact;
