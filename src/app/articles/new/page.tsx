import { NewArticleForm } from "@/components/NewArticleForm";
import Article from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";

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
  };

  return (
    <div>
      <h1>NewArticlePage</h1>
      <NewArticleForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewArticlePage;
