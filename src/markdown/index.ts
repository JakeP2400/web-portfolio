/* export async function listPost() {
  console.log();
  const files = import.meta.glob();
}
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 1. Get the absolute path to *this* directory
const postsDirectory = path.join(process.cwd(), ".markdown");

/**
 * Gets metadata for all posts, sorted by date.
 * Used for the blog list page.
 */
export function getSortedPostsData() {
  // 1. Read all files in the directory
  const allFileNames = fs.readdirSync(postsDirectory);

  // 2. Filter for *only* .md files
  const fileNames = allFileNames.filter((fileName) => fileName.endsWith(".md"));

  const allPostsData = fileNames.map((fileName) => {
    // 3. The 'slug' is the filename without '.md'
    const slug = fileName.replace(/\.md$/, "");

    // 4. Read the file's content
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 5. Use gray-matter to parse the metadata
    const matterResult = matter(fileContents);

    // 6. Return the metadata and the slug
    return {
      slug,
      ...(matterResult.data as { title: string; date: string }),
    };
  });

  // 7. Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Gets all slugs for generateStaticParams.
 * This tells Next.js which pages to build.
 */
export function getPostSlugs() {
  const allFileNames = fs.readdirSync(postsDirectory);
  const fileNames = allFileNames.filter((fileName) => fileName.endsWith(".md"));

  // Returns an array of objects: [ { slug: 'first-post' }, { slug: 'another-post' } ]
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ""),
    };
  });
}

/**
 * Gets the full data (metadata + content) for a *single* post.
 * Used by the [slug]/page.tsx.
 */
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse metadata
  const matterResult = matter(fileContents);

  // Convert the Markdown content into an HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Return all data for this post
  return {
    slug,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      date: string;
      author: string;
    }),
  };
}
