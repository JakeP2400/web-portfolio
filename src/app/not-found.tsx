import Link from "next/link";
import Navbar from "./component/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>

        <Link
          href="/blog"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go back to Blog
        </Link>
      </main>
    </>
  );
}
