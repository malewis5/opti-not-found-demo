import Link from 'next/link'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-4xl mx-auto p-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
              <li><Link href="/blog/hello-world" className="text-blue-500 hover:underline">Hello World Post</Link></li>
              <li><Link href="/blog/next-js-rocks" className="text-blue-500 hover:underline">Next.js Rocks Post</Link></li>
              <li><Link href="/blog/non-existent" className="text-blue-500 hover:underline">Non-existent Post</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}

