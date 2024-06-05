import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-32 text-center text-6xl">Welcome to my blog!</h1>
      <div className="flex gap-5">
        <Link
          className="text-2xl font-bold underline-offset-4 hover:underline"
          href={"/articles"}
        >
          All articles
        </Link>
        <Link
          className="text-2xl font-bold underline-offset-4 hover:underline"
          href={"/articles/new"}
        >
          Write a new article
        </Link>
      </div>
    </main>
  );
}
