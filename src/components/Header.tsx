import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-12 bg-black text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href={"/"}>
          <h2 className="text-2xl font-bold">My Blog</h2>
        </Link>
        <nav className="flex gap-5">
          <Link
            className="font-bold underline-offset-4 hover:underline"
            href={"/articles"}
          >
            All articles
          </Link>
          <Link
            className="font-bold underline-offset-4 hover:underline"
            href={"/articles/new"}
          >
            Write a new article
          </Link>
        </nav>
      </div>
    </header>
  );
};
