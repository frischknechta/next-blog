import { Login } from "@/components/Login";

const LoginPage = () => {
  return (
    <main className="mt-10 flex grow flex-col items-center gap-5">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <Login></Login>
    </main>
  );
};

export default LoginPage;
