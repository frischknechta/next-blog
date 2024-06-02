import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Article from "@/models/Article";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "HELLO!" });
};

export const POST = connectRouteToDb(async (request: NextRequest) => {
  const { text, title, author } = await request.json();
  const newArticle = await Article.create({ title, text, author });
  return NextResponse.json(newArticle, { status: 201 });
});
