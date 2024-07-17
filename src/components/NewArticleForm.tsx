"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export const NewArticleForm = ({
  handleSubmit,
}: {
  handleSubmit: (formData: FormData) => void;
}) => {
  const session = useSession();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File>();
  const [author, setAuthor] = useState(
    session.data?.user?.name ? session.data.user.name : "",
  );
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (title && text && author && file) {
          setIsLoading(true);
          const formData = new FormData();
          formData.append("picture", file);
          formData.append("title", title);
          formData.append("text", text);
          formData.append("author", author);
          handleSubmit(formData);
        }
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
      <label htmlFor="picture">Picture</label>
      <input
        className="flex border-2 border-black px-2"
        type="file"
        name="picture"
        id="picture"
        onChange={(event) => {
          if (event.target.files) {
            setFile(event.target.files[0]);
          }
        }}
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
      <button
        disabled={isLoading ? true : false}
        className="w-fit self-center rounded-xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-opacity-90"
      >
        Submit
      </button>
    </form>
  );
};
