"use client";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { useTransformDate } from "@/shared/hooks/useTransformDate";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IMediaNews } from "@/entities/news";

export const NewsItem = ({ news }: { news: IMediaNews }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-2 bg-[var(--black75)] border-y border-gray-500 md:max-h-[150px] overflow-y-hidden animate-opacity">
      <div>
        <Link className="block md:w-[260px]" target="_blank" href={news.url}>
          {isLoading && <Skeleton width={260} height={146} />}
          <Image
            width={260}
            height={0}
            className="w-full object-fill"
            src={news.imageUrl}
            alt={news.title}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 overflow-hidden py-1 w-full">
        <Link href={news.url} target="_blank" className="text-base md:text-lg hover:text-[var(--blueColor)]">
          {news.title}
        </Link>
        <p className="text-sm text-gray-400  line-clamp-2">{news.description}</p>
        <span className="text-xs md:text-sm mt-auto self-end text-gray-400">
          {useTransformDate(new Date(news.publishedAt))}
        </span>
      </div>
    </div>
  );
};
