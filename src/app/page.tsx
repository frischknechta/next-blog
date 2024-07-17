import Image from "next/image";
import Link from "next/link";
import { auth } from "@/../auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex flex-col items-center justify-center">
      {session ? (
        <h1 className="my-32 text-center text-6xl">{`Welcome ${session.user?.name}!`}</h1>
      ) : (
        <h1 className="my-32 text-center text-6xl">Welcome to my blog!</h1>
      )}
      <div className="flex flex-col items-center gap-10 font-sans text-2xl uppercase md:flex-row">
        <Link className="underline-offset-4 hover:underline" href={"/articles"}>
          All articles
        </Link>
        {session ? (
          <Link
            className="underline-offset-4 hover:underline"
            href={"/articles/new"}
          >
            Write a new article
          </Link>
        ) : null}
      </div>
    </main>
  );
}
