"use client";
import { SlMagnifier } from "react-icons/sl";
import React from "react";

import useSearch from "./useSearch";

const Search = () => {
  const { search, searchHandler, changeInputHandler, keyDownHandler } = useSearch();

  return (
    <div className="w-full flex justify-center gap-1 my-3">
      <input
        value={search}
        onChange={changeInputHandler}
        onKeyDown={keyDownHandler}
        className="max-w-[400px] w-full text-xl py-2 px-2 rounded text-black "
        type="search"
        placeholder="Поиск фильма"
      />
      <div
        onClick={searchHandler}
        className="flex justify-center items-center px-4 bg-white rounded cursor-pointer hover:bg-[var(--blueColor)] duration-300"
      >
        <SlMagnifier color="black" size={20} />
      </div>
    </div>
  );
};

export default Search;
