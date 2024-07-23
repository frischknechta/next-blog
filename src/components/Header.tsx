import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { auth } from "@/../auth";
import { SignOut } from "./Sign-out";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="max-h-fit w-screen bg-white text-black">
      <div className="container mx-auto flex h-full flex-col items-center justify-between p-5 md:flex-row">
        <Link href={"/"}>
          <h2 className="mb-2 font-sorts_mill_goudy text-5xl sm:mb-0">
            My Blog
          </h2>
        </Link>
        <nav className="flex flex-col items-center gap-5 font-sans text-lg uppercase sm:flex-row">
          <Link
            className="underline-offset-4 hover:underline sm:my-2"
            href={"/articles"}
          >
            Articles
          </Link>
          {session ? (
            <Link
              className="underline-offset-4 hover:underline sm:my-2"
              href={"/articles/new"}
            >
              Write a new article
            </Link>
          ) : null}
          {!session ? (
            <Link
              href={"/login"}
              className="underline-offset-4 hover:underline sm:my-2"
            >
              Sign Up
            </Link>
          ) : (
            <div className="flex items-center gap-5">
              <SignOut />
              <UserAvatar />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
