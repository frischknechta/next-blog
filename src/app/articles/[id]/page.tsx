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
    <div className="container mx-auto flex flex-col items-center gap-5">
      <h1 className="my-5 text-4xl font-bold">Article</h1>
      <div className="mx-auto flex w-2/3 flex-col gap-5">
        {data ? <Article article={data} /> : "Loading..."}
      </div>
    </div>
  );
};

export default ArticlePage;
