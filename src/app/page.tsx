import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center pt-10 px-5">
      <h1 className="text-[80px] xl:text-[140px] font-bold uppercase mt-32">Main Title</h1>
      <div className="text-2xl mt-16 bg-[var(--darkblue)] border rounded-xl px-8 py-2 w-max m-auto">
        <div className="hover:translate-x-2 hover:text-[var(--blueColor)] duration-300">
          <Link href="/movies">Перейти к фильмам →</Link>
        </div>
      </div>
    </div>
  );
}
