import { Article } from "@/components/Article";
import ArticleModel from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";
import { articlesSchema } from "@/types/types";
import Link from "next/link";

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

  console.log("DATA>>>>>>>>>>>", data);

  return (
    <div className="container mx-auto flex flex-col items-center gap-5">
      <h1 className="my-5 text-4xl font-bold">Articles</h1>
      <div className="mx-auto flex w-2/3 flex-col gap-5">
        {data?.map((article) => {
          return (
            <Link
              href={`/articles/${article._id}`}
              key={article._id.toString()}
            >
              <Article article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
