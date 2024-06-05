import { z } from "zod";
import mongoose from "mongoose";

export const ObjectId = mongoose.Types.ObjectId;

export const articleSchema = z.object({
  title: z.string(),
  text: z.string(),
  author: z.string(),
  date: z.date(),
  _id: z.any(),
});

export const articlesSchema = z.array(articleSchema);

export type ArticleType = z.infer<typeof articleSchema>;
