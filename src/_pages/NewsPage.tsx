"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import useReverseNews from "@/widgets/news/lib/useReverseNews";
import Loader from "@/shared/ui/Loader/Loader";
import Pagination from "@/shared/ui/Pagination/Pagination";
import { NewsList, getAllMediaNews } from "@/widgets/news";

const NewsPage = () => {
  const { data } = getAllMediaNews("1");
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || "1";

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
