import Link from 'next/link'
import { getAllPosts } from '../lib/cms'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
          </div>
        ))}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-dashed border-gray-300">
          <h2 className="text-xl font-semibold mb-2">
            <Link href="/blog/non-existent-post" className="text-red-600 hover:underline">
              Non-existent Post (404 Demo)
            </Link>
          </h2>
          <p className="text-gray-600">Click here to see how our 404 page looks!</p>
        </div>
      </div>
    </div>
  )
}

