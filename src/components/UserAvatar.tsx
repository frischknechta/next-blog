import Image from "next/image";
import { auth } from "@/../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (session) {
    if (!session.user) return null;

    return (
      <div>
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={50}
            height={50}
            className="h-full rounded-full"
          />
        ) : null}
      </div>
    );
  }
}
