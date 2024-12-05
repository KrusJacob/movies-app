import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-6 flex flex-col gap-6">
      <h2 className="text-4xl">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link
        className="border block w-max m-auto bg-slate-100 text-black px-4 py-2 text-xl rounded hover:bg-slate-300 duration-200"
        href={"/"}
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
