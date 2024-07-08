import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Article from "@/models/Article";
import { NextRequest, NextResponse } from "next/server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const convertToBase64 = (file, buffer) => {
  return `data:${file.type};base64,${buffer.toString("base64")}`;
};

export const GET = () => {
  return NextResponse.json({ message: "HELLO!" });
};

// export const POST = connectRouteToDb(async (request: NextRequest) => {
//   const { text, title, author } = await request.json();
//   const newArticle = await Article.create({ title, text, author });
//   return NextResponse.json(newArticle, { status: 201 });
// });

export const POST = connectRouteToDb(async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const file = formData.get("picture");
    const buffer = Buffer.from(await file.arrayBuffer());

    const pictureToUpload = convertToBase64(file, buffer);

    const result = await cloudinary.uploader.upload(pictureToUpload);

    console.log(result);

    const date = new Date();
    const newArticle = new Article({
      title: formData.get("title"),
      text: formData.get("text"),
      author: formData.get("author"),
      date: date,
      picture: result,
    });

    await newArticle.save();

    console.log("NEW ARTICLE>>>>>>>>><", newArticle);

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
});
