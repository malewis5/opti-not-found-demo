import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for doesn't exist.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

