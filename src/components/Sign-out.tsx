import { signOut } from "@/../auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="text-lg uppercase underline-offset-4 hover:underline"
      >
        Sign Out
      </button>
    </form>
  );
}
