import { signIn } from "@/../auth";

export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="font-bold underline-offset-4 hover:underline"
      >
        Signin with Google
      </button>
    </form>
  );
}
