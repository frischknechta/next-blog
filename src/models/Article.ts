import { Schema, model, models } from "mongoose";

const article = new Schema({
  title: String,
  text: String,
  author: String,
  date: Date,
});

const Article = models.Article || model("Article", article);

export default Article;
