import React from "react";

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="bg-[var(--darkblue)] text-white border-2 w-min border-white/75 rounded-full px-4 py-1 text-sm md:text-base">
      {text}
    </div>
  );
};

export default Chip;
