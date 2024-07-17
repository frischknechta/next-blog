import ArticleModel from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";
import { articlesSchema } from "@/types/types";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";

const fetchData = async () => {
  try {
    await connectPageToDb();
    const data = await ArticleModel.find();
    const parsedData = articlesSchema
      .parse(data)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
    return parsedData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const ArticlesPage = async () => {
  const data = await fetchData();

  return (
    <div className="container mx-auto flex grow flex-col items-center gap-5 pb-10">
      <h1 className="my-5 text-6xl">Articles</h1>
      <div className="mx-auto grid w-full grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((article) => {
          return (
            <Link
              href={`/articles/${article._id}`}
              key={article._id.toString()}
            >
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
