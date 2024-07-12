import ArticleModel from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";
import { articleSchema } from "@/types/types";
import { Article } from "@/components/Article";

const fetchData = async (id: string) => {
  try {
    await connectPageToDb();
    const data = await ArticleModel.findOne({ _id: id });
    const parsedData = articleSchema.parse(data);
    return parsedData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(id);

  const data = await fetchData(id);

  return (
    <div className="mx-auto flex grow flex-col items-center gap-5">
      {data ? <Article article={data} /> : "Loading..."}
    </div>
  );
};

export default ArticlePage;
