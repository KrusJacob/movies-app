import { fetchMovieFacts } from "@/entities/fact/api";
import { useQuery } from "@tanstack/react-query";

export const getAllMovieFacts = (id: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["movieFact", id],
    queryFn: () => fetchMovieFacts(id),
    select: (data) => data.items,
  });

  return { data, isPending, isError };
};
