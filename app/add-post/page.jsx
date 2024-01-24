'use client'


import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetch('/api/add-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({title, content})}
      )
      router.refresh()
    } catch (error) {
      console.error(error);
    }

    setTitle('');
    setContent('');
  };

  return(

    <main className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <Link href={'/'} className="text-blue-500 mb-4 block">
       View Posts
      </Link>
      <h1 className="text-2xl font-bold mb-4">Add Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="title" className="block font-semibold">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <label htmlFor="content" className="block font-semibold">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
