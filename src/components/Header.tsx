import Link from "next/link";
import { SignIn } from "@/components/Sign-in";
import UserAvatar from "./UserAvatar";
import { auth } from "@/../auth";
import { SignOut } from "./Sign-out";
import { SignInGoogle } from "./Sign-inGoogle";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="h-12 bg-black text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href={"/"}>
          <h2 className="text-2xl font-bold">My Blog</h2>
        </Link>
        <nav className="flex items-center gap-5">
          <Link
            className="font-bold underline-offset-4 hover:underline"
            href={"/articles"}
          >
            All articles
          </Link>
          {session ? (
            <Link
              className="font-bold underline-offset-4 hover:underline"
              href={"/articles/new"}
            >
              Write a new article
            </Link>
          ) : null}
          {!session ? (
            <div className="flex items-center gap-5">
              <SignIn /> <SignInGoogle />
            </div>
          ) : (
            <SignOut />
          )}
          <UserAvatar />
        </nav>
      </div>
    </header>
  );
};
