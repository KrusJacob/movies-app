"use client";
import useDebounce from "@/hooks/useDebounce";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const Search = ({ changeTemp }: { changeTemp: Dispatch<SetStateAction<string>> }) => {
  const [search, setSearch] = useState<string>("");

  const debounceTemp = useDebounce(search);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    changeTemp(debounceTemp);
  }, [debounceTemp]);

  return (
    <div className="w-full flex justify-center my-3">
      <input
        value={search}
        onChange={changeHandler}
        className="min-w-[400px] text-xl py-1 px-2 rounded text-black "
        type="text"
        placeholder="Поиск фильма"
      />
    </div>
  );
};

export default Search;
