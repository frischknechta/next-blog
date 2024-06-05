"use client";

import { useState } from "react";

export const NewArticleForm = ({
  handleSubmit,
}: {
  handleSubmit: (title: string, text: string, author: string) => void;
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(title, text, author);
      }}
      className="flex flex-col gap-5"
    >
      <label htmlFor="title">Title</label>
      <input
        className="flex border-2 border-black px-2"
        type="text"
        name="title"
        id="title"
        placeholder="The title of your post"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        required
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="flex border-2 border-black px-2"
        name="text"
        id="text"
        placeholder="The content of your post"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        rows={10}
        required
      />
      <label htmlFor="author">Author</label>
      <input
        className="flex border-2 border-black px-2"
        type="text"
        name="author"
        id="author"
        placeholder="Your name"
        value={author}
        onChange={(event) => {
          setAuthor(event.target.value);
        }}
        required
      />
      <button className="w-fit self-center rounded-xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-opacity-90">
        Submit
      </button>
    </form>
  );
};
