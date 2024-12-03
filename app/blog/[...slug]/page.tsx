import { notFound } from 'next/navigation'
import { getPostBySlug } from '../../../lib/cms'

export default async function BlogPost({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}

