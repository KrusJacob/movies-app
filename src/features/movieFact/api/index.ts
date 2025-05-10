import { fetchMovieFacts } from "@/entities/fact/api";
import { useQuery } from "@tanstack/react-query";

export const getAllMovieFacts = (id: string, show: boolean) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["movieFact", id],
    queryFn: () => fetchMovieFacts(id),
    select: (data) => data.items,
    enabled: show,
  });

  return { data, isPending, isError };
};
