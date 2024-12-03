import Link from 'next/link'

export default function BlogNotFound() {
  return (
    <div className="mt-40 flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-6">Oops! The blog post you're looking for doesn't seem to exist.</p>
        <div className="space-x-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

