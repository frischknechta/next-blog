import { NewArticleForm } from "@/components/NewArticleForm";
import Article from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";
import { redirect } from "next/navigation";

const NewArticlePage = () => {
  const handleSubmit = async (title: string, text: string, author: string) => {
    "use server";
    try {
      await connectPageToDb();
      const date = new Date();
      const newArticle = new Article({
        title: title,
        text: text,
        author: author,
        date: date,
      });
      console.log(newArticle);
      await newArticle.save();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    redirect("/articles");
  };

  return (
    <div className="flex w-screen flex-col items-center gap-5">
      <h1 className="my-5 text-4xl font-bold">New Article</h1>
      <div className="w-1/3">
        <NewArticleForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NewArticlePage;
