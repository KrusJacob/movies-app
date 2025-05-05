import { useQuery } from "@tanstack/react-query";
import { fetchMediaNews } from "@/entities/news/api";

export const getAllMediaNews = (page: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["news", page],
    queryFn: () => fetchMediaNews(page),
    select: (data) => ({
      news: data.items,
      totalPages: data.totalPages,
    }),
  });

  return { data, isPending, isError };
};
