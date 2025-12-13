import fs from "fs";
import path from "path";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Summary from "../summary/summary"; // Assuming this is a valid import 


export default async function BlogPage() {
  // Path to your markdown directory
  const markdownDir = path.join(process.cwd(),"src", "markdown");

  // Read all filenames
  const files = fs.readdirSync(markdownDir);

  // Filter only .md files and remove extensions
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
      title: file.replace(/\.md$/, "").replace(/-/g, " "),
    }));

  return (
    <>
      <Navbar />

      <main className="p-6 space-y-4">
        <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}