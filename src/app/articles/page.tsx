import { Article } from "@/components/Article";
import ArticleModel from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";

const fetchData = async () => {
  try {
    await connectPageToDb();
    const data = await ArticleModel.find();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const ArticlesPage = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {data?.map((article) => {
          return <Article key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
