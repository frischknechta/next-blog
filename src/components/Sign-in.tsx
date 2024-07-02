import { signIn } from "@/../auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="font-bold underline-offset-4 hover:underline"
      >
        Signin with GitHub
      </button>
    </form>
  );
}
