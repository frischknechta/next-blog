"use client";

import { Login } from "./Login";
import { useRouter } from "next/navigation";

export const ModalLogin = () => {
  const router = useRouter();

  return (
    <div
      className="z-100 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={() => {
        router.back();
      }}
    >
      <div
        className="flex flex-col items-center gap-5 rounded-md bg-white p-5"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h2 className="text-xl font-bold">Sign Up</h2>
        <Login />
        <button
          onClick={() => {
            router.back();
          }}
          className="w-full rounded-md bg-red-500 p-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};
