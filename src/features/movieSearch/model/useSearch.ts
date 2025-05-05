"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState<string>(() => "");
  const searchParams = useSearchParams();
  const params = searchParams ? new URLSearchParams(searchParams) : new URLSearchParams();
  const router = useRouter();

  const searchHandler = () => {
    changeParams(search);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeParams(search);
    }
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      changeParams("");
    }
  };

  const changeParams = (str: string) => {
    if (str === "") {
      params.delete("search");
    } else {
      params.set("search", str);
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  };

  return { search, searchHandler, changeInputHandler, keyDownHandler };
};
