// This is a mock CMS service
const posts = [
  { slug: 'hello-world', title: 'Hello World', content: 'This is my first post!' },
  { slug: 'next-js-rocks', title: 'Next.js Rocks', content: 'Here\'s why Next.js is awesome...' },
];

export async function getPostBySlug(slug: string) {
  // Simulate a delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts.find(post => post.slug === slug) || null;
}

export async function getAllPosts() {
  // Simulate a delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts;
}
