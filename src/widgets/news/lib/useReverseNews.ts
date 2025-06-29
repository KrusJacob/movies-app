import { getAllMediaNews } from "@/widgets/news";

const useReverseNews = (page: string, totalPages: number) => {
  // const { data: lastData, isPending, isError } = getAllMediaNews(`${totalPages - parseInt(page) + 1}`);
  const { data: lastData, isPending, isError } = getAllMediaNews(`${page}`);

  // const reversedData = {
  //   ...lastData,
  //   news: lastData?.news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
  // };

  return { reversedData: lastData, isPending, isError };
};

export default useReverseNews;
