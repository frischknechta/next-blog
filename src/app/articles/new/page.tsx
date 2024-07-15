import { NewArticleForm } from "@/components/NewArticleForm";
import { redirect } from "next/navigation";
import { auth } from "@/../auth";
import axios from "axios";

const NewArticlePage = async () => {
  const session = await auth();

  const handleSubmit = async (formData: FormData) => {
    "use server";

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URI}api/articles`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log({ message: "Unknown error" });
      }
    }
    redirect("/articles");
  };

  return !session ? (
    redirect("/")
  ) : (
    <div className="flex w-screen flex-col items-center gap-5">
      <h1 className="my-5 text-4xl font-bold">New Article</h1>
      <div className="w-1/3">
        <NewArticleForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NewArticlePage;
