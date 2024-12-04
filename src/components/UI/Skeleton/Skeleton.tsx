import React from "react";

const Skeleton = ({ width = 350, height = 500 }) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-slate-400 blur-sm animate-pulse"
    ></div>
  );
};

export default Skeleton;
