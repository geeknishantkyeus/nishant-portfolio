import { getMediumPosts, formatDate } from "@/lib/medium";

export default async function Blog() {
  const posts = await getMediumPosts(4);

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> BLOG
          </h2>
          <span className="mono text-sm text-neutral-500">
            {posts.length > 0 ? `${posts.length} latest` : "coming soon"}
          </span>
        </div>

        {/* Divider */}
        <div className="dotted-red mb-12" />

        {/* Posts */}
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@geeknishant"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-sm px-6 py-3 border border-[#1F1F1F] text-neutral-400 hover:border-[#DC143C] hover:text-[#DC143C] transition-all inline-block"
          >
            [ Read More on Medium ]
          </a>
        </div>

      </div>
    </section>
  );
}