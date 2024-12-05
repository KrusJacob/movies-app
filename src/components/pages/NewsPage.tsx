"use client";
import { getAllMediaNews } from "@/hooks/useQuery";
import { useSearchParams } from "next/navigation";
import React from "react";
import Loader from "../UI/Loader/Loader";
import NewsList from "../entities/news/list/NewsList";
import Pagination from "../UI/Pagination/Pagination";

import useReverseNews from "@/hooks/useReverseNews";

const NewsPage = () => {
  const { data } = getAllMediaNews("1");
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { reversedData, isPending, isError } = useReverseNews(page, data?.totalPages || parseInt(page));

  if (isError) {
    throw new Error("Something went wrong!");
  }

  return (
    <div className="max-w-[1080px] m-auto px-4 mt-6 flex flex-col gap-6">
      {isPending ? (
        <Loader />
      ) : (
        <>
          <Pagination totalPages={data?.totalPages} currentPage={parseInt(page)} />
          {reversedData.news && <NewsList news={reversedData.news} />}
          <Pagination totalPages={data?.totalPages} currentPage={parseInt(page)} />
        </>
      )}
    </div>
  );
};

export default NewsPage;
