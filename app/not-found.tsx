import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          
          <p className="mono text-[#DC143C] text-sm mb-4">
            &gt; ERROR 404
          </p>

          <h1 className="mono text-6xl md:text-8xl font-bold mb-6">
            404
          </h1>

          <p className="mono text-neutral-400 mb-2">
            &gt; page_not_found
          </p>

          <p className="text-neutral-500 mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="mono text-sm px-6 py-3 border border-[#8B0000] text-[#EDEDED] hover:bg-[#1A0000] hover:border-[#DC143C] hover:shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-all inline-block"
          >
            [ Go Back Home ]
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}