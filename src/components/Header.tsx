import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { auth } from "@/../auth";
import { SignOut } from "./Sign-out";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="max-h-fit w-screen text-black">
      <div className="container mx-auto flex h-full flex-col items-center justify-between p-5 md:flex-row">
        <Link href={"/"}>
          <h2 className="font-sorts_mill_goudy text-5xl">My Blog</h2>
        </Link>
        <nav className="flex items-center gap-5 font-sans text-lg uppercase">
          <Link
            className="my-2 underline-offset-4 hover:underline"
            href={"/articles"}
          >
            Articles
          </Link>
          {session ? (
            <Link
              className="underline-offset-4 hover:underline"
              href={"/articles/new"}
            >
              Write a new article
            </Link>
          ) : null}
          {!session ? (
            <Link
              href={"/login"}
              className="underline-offset-4 hover:underline"
            >
              Sign Up
            </Link>
          ) : (
            <SignOut />
          )}
          <UserAvatar />
        </nav>
      </div>
    </header>
  );
};
