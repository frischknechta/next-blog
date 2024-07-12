import { z } from "zod";
import mongoose from "mongoose";
import { url } from "inspector";

export const ObjectId = mongoose.Types.ObjectId;

export const articleSchema = z.object({
  title: z.string(),
  text: z.string(),
  author: z.string(),
  date: z.date(),
  picture: z.object({
    url: z.string(),
    secure_url: z.string(),
    width: z.number(),
    height: z.number(),
    format: z.string(),
  }),
  _id: z.any(),
});

export const articlesSchema = z.array(articleSchema);

export type ArticleType = z.infer<typeof articleSchema>;
