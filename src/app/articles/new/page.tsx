import { NewArticleForm } from "@/components/NewArticleForm";
import { redirect } from "next/navigation";
import { auth } from "@/../auth";

import Article from "@/models/Article";
import connectPageToDb from "@/utils/connectPageToDb";
import { convertToBase64 } from "@/utils/convertToBase64";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const NewArticlePage = async () => {
  const session = await auth();

  const handleSubmit = async (formData: FormData) => {
    "use server";

    try {
      await connectPageToDb();

      const date = new Date();
      const newArticle = new Article({
        title: formData.get("title"),
        text: formData.get("text"),
        author: formData.get("author"),
        date: date,
      });

      const pictureToUpload: any = formData.get("picture");
      const buffer = Buffer.from(await pictureToUpload.arrayBuffer());

      console.log(pictureToUpload, buffer);

      const result = await cloudinary.uploader.upload(
        convertToBase64(pictureToUpload, buffer),
        {
          folder: `blog/${newArticle._id}`,
        },
      );

      newArticle.picture = result;

      await newArticle.save();

      console.log("NEW ARTICLE>>>>>>>>><", newArticle);
    } catch (error) {
      if (error instanceof Error) {
        return console.log({ message: error.message });
      } else {
        return console.log({ message: "Unknown error" });
      }
    }

    redirect("/articles");
  };

  return !session ? (
    redirect("/")
  ) : (
    <div className="flex w-screen flex-col items-center gap-5">
      <h1 className="my-5 text-4xl font-bold">New Article</h1>
      <div className="w-1/3">
        <NewArticleForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default NewArticlePage;
