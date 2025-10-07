import React from "react";

const ClearMovieFavorites = ({ onClear }: { onClear: () => void }) => {
  const clearFoviritesHandler = () => {
    onClear();
  };
  return (
    <button
      onClick={clearFoviritesHandler}
      className="flex gap-4 m-auto mt-10  border-white border-[1px] px-3 py-2 justify-center items-center bg-[var(--darkViolet)] text-white hover:text-[var(--darkViolet)] hover:bg-white transition-all duration-300"
    >
      Очистить
    </button>
  );
};

export default ClearMovieFavorites;
