"use client";

import { signIn } from "next-auth/react";

export function SignInGoogle() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="rounded-md bg-blue-500 p-2 text-white"
    >
      Sign In with Google
    </button>
  );
}
