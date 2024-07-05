"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="rounded-md bg-black p-2 text-white"
    >
      Sign In with GitHub
    </button>
  );
}
