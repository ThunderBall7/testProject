import Link from 'next/link';
import Post from './components/Post';
import prisma from '../lib/prisma'

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Feed</h1>
        <Link href="/add-post" className="text-blue-500">Add Post
        </Link>
      </div>
      {
        posts.map((post) => {
          return (
            <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            />
          )
        })
      }
    </main>
  )
}
