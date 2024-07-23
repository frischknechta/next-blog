import Image from "next/image";
import Link from "next/link";
import { auth } from "@/../auth";
import backgroundImage from "@/../public/bg-tokyo.jpeg";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex grow flex-col items-center justify-evenly">
      <Image
        src={backgroundImage}
        alt="background"
        className="fixed top-0 -z-10 h-full w-full object-cover opacity-15"
      />
      {session ? (
        <h1 className="text-center text-6xl">{`Welcome ${session.user?.name}!`}</h1>
      ) : (
        <h1 className="text-center text-6xl">Welcome to my blog!</h1>
      )}
      <div className="flex flex-col items-center gap-5 font-sans text-2xl uppercase md:mb-5 md:flex-row">
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
