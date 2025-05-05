import { IMediaNews, NewsItem } from "@/entities/news";
import React from "react";

export const NewsList = ({ news }: { news: IMediaNews[] }) => {
  return (
    <div className="flex flex-col gap-8  min-h-[1100px]">
      {news.map((item) => (
        <NewsItem key={item.kinopoiskId} news={item} />
      ))}
      {!news.length && <div className="mt-6">Новости не найдены</div>}
    </div>
  );
};
