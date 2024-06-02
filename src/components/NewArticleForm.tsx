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
      className="flex flex-col w-1/4"
    >
      <label htmlFor="title">Title</label>
      <input
        className="flex border-black border-2"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="flex border-black border-2"
        name="text"
        id="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <label htmlFor="author">Author</label>
      <input
        className="flex border-black border-2"
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(event) => {
          setAuthor(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};
