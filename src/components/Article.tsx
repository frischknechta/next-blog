import { ArticleType } from "@/types/types";

export const Article = ({ article }: { article: ArticleType }) => {
  console.log(article.date);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <p>{article.author}</p>
      <p>{article.date.toString()}</p>
    </div>
  );
};
