import { ArticleType } from "@/types/types";
import { format } from "date-fns";
import Image from "next/image";

export const ArticleCard = ({ article }: { article: ArticleType }) => {
  return (
    <div className="flex h-[50vh] flex-col items-center gap-5 hover:cursor-pointer">
      <Image
        src={article.picture.secure_url}
        alt={`${article.title} picture`}
        width={250}
        height={250}
        className="h-4/6 w-full object-cover"
      />
      <p className="font-sans tracking-widest">
        {format(article.date, "dd/MM/yyyy")}
      </p>
      <h2 className="text-3xl uppercase">{article.title}</h2>
    </div>
  );
};
