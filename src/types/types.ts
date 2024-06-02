import { z } from "zod";

export const articleSchema = z.object({
  title: z.string(),
  text: z.string(),
  author: z.string(),
  date: z.string().datetime(),
  _id: z.string(),
});

export type ArticleType = z.infer<typeof articleSchema>;
