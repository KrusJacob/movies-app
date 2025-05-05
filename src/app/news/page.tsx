import NewsPage from "@/_pages/NewsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Новости | ФильмФан",
};

const News = () => {
  return <NewsPage />;
};

export default News;
