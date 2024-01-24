import DeletePostButton from "./DeletePostButton";

export default function Post({ id, title, content, authorName }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <p className="text-gray-600 font-semibold">{authorName}</p>
      <h2 className="text-2xl font-bold mt-2">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
}
