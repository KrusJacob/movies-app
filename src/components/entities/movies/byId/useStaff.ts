import { IStaff } from "@/types/staff";

const useStaff = (staff: IStaff[], limit = 5) => {
  const actors = staff
    .filter((item) => item.professionKey === "ACTOR")
    .slice(0, limit)
    .map((item) => item.nameRu);

  return actors;
};

export default useStaff;
