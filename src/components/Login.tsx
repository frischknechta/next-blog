import { SignIn } from "./Sign-in";
import { SignInGoogle } from "./Sign-inGoogle";

export const Login = () => {
  return (
    <div className="flex flex-col gap-5">
      <SignIn />
      <SignInGoogle />
    </div>
  );
};
