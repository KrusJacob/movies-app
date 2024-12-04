import { getAllMediaNews } from "./useQuery";

const useReverseNews = (page: string, totalPages: number) => {
  const { data: lastData, isPending, isError } = getAllMediaNews(`${totalPages - parseInt(page) + 1}`);

  const reversedData = {
    ...lastData,
    news: lastData?.news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
  };

  return { reversedData, isPending, isError };
};

export default useReverseNews;
