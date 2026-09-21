import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMediumPosts, formatDate } from "@/lib/medium";

export const metadata = {
  title: "Blog — Nishant Kumar",
  description: "AI dev tutorials and journey posts.",
};

export default async function BlogPage() {
  const posts = await getMediumPosts(20);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          <h1 className="mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#DC143C]">&gt;</span> BLOG
          </h1>

          <p className="text-neutral-400 mb-12">
            AI dev tutorials, project breakdowns, and journey posts.
          </p>

          <div className="dotted-red mb-12" />

          {posts.length === 0 ? (
            <p className="mono text-sm text-neutral-500">
              No posts yet. Coming soon...
            </p>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => (
                <a
                  key={i}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 border-b border-[#1F1F1F] hover:border-[#DC143C] transition-colors"
                >
                  <span className="mono text-xs text-neutral-500 md:w-24 shrink-0">
                    {formatDate(post.isoDate)}
                  </span>
                  <span className="text-neutral-300 group-hover:text-[#DC143C] transition-colors flex-grow">
                    {post.title}
                  </span>
                  <span className="mono text-sm text-neutral-600 group-hover:text-[#DC143C] transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}