import fs from "fs";
import path from "path";
import { marked } from "marked";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import Navbar from "../../component/Navbar";
import Footer from "@/app/component/Footer";

type BlogPostProps = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src", "markdown", `${slug}.md`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");

  // --- Use gray-matter to parse frontmatter ---
  const { data: meta, content: markdown } = matter(fileContent);

  // Convert markdown to HTML
  const htmlContent = marked(markdown);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Metadata Header */}
          <header className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6">
            <h1 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
              {meta.title || slug.replaceAll("-", " ")}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              {meta.date && (
                <time className="italic">
                  {new Date(meta.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}

              {meta.author && (
                <span className="text-gray-500 dark:text-gray-300">
                  By <span className="font-medium">{meta.author}</span>
                </span>
              )}

              {meta.tags && meta.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Markdown Content */}
          <article
            className="
              text-gray-800 dark:text-gray-100 leading-relaxed
              [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:text-violet-600
              [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3
              [&>p]:mb-4 [&>p]:text-lg
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2
              [&>a]:text-violet-600 [&>a:hover]:underline
              [&>blockquote]:border-l-4 [&>blockquote]:border-violet-500 [&>blockquote]:pl-4 [&>blockquote]:italic
              [&>code]:bg-gray-200 dark:[&>code]:bg-gray-800 [&>code]:text-violet-600 [&>code]:px-1 [&>code]:rounded
              [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto
            "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
