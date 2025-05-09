import { IStaff } from "./types";

export const useShowActors = (staff: IStaff[], limit = 5) => {
  const actors =
    staff
      .filter((item) => item.professionKey === "ACTOR")
      .slice(0, limit)
      .map((item) => item.nameRu)
      .join(", ") + "...";

  return actors;
};
