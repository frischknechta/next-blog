import { ArticleType } from "@/types/types";
import { log } from "console";
import { format } from "date-fns";
import Image from "next/image";

export const Article = ({ article }: { article: ArticleType }) => {
  console.log(article);

  return (
    <div className="flex grow flex-col gap-2 border-2 border-black">
      <div className="container mx-auto flex h-[40vh] items-center justify-between p-5">
        <h2 className="text-[5vw]">{article.title}</h2>
        <p className="text-[2vw]">{format(article.date, "dd/MM/yyyy")}</p>
      </div>
      <Image
        src={article.picture.secure_url}
        alt={`${article.title} picture`}
        width={1000}
        height={600}
        className="max-h-[80vh] w-screen object-cover"
      />
      <div className="container mx-auto my-10 flex flex-col gap-10 p-5 text-[1.75vw] leading-relaxed tracking-wide">
        <p className="whitespace-pre-line">{article.text}</p>
        <p>{article.author}</p>
      </div>
    </div>
  );
};
