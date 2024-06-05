import { ArticleType } from "@/types/types";
import { format } from "date-fns";

export const Article = ({ article }: { article: ArticleType }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black p-2">
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <p>{article.author}</p>
      <p>{format(article.date, "eeee, dd/MM/yyyy, kk:mm:ss")}</p>
    </div>
  );
};
