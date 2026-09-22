import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Security Policy — Nishant Kumar",
  description:
    "Security policy and responsible disclosure for geeknishant.tech",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          <h1 className="mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#DC143C]">&gt;</span> SECURITY
          </h1>

          <p className="text-neutral-400 mb-12">
            Security is a priority. This page outlines our security practices
            and how to report vulnerabilities.
          </p>

          <div className="dotted-red mb-12" />

          <div className="space-y-12 text-neutral-300 leading-relaxed">
            
            {/* Section 1 */}
            <div>
              <h2 className="mono text-xl font-bold text-[#DC143C] mb-4">
                &gt; Security Measures
              </h2>
              <ul className="space-y-2 text-sm mono text-neutral-400">
                <li>✓ HTTPS enforced (HSTS with preload)</li>
                <li>✓ Security headers configured</li>
                <li>✓ Content Security Policy active</li>
                <li>✓ No third-party trackers</li>
                <li>✓ No sensitive data in client</li>
                <li>✓ Regular dependency updates</li>
                <li>✓ Rate limiting enabled</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mono text-xl font-bold text-[#DC143C] mb-4">
                &gt; Responsible Disclosure
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                If you discover a security vulnerability, please report it
                responsibly. I appreciate your help in keeping this site secure.
              </p>
              <div className="border border-[#1F1F1F] p-4 mono text-sm space-y-2">
                <p>
                  <span className="text-[#DC143C]">Email:</span>{" "}
                  <a
                    href="mailto:usenishant@gmail.com"
                    className="text-neutral-300 hover:text-[#DC143C] transition-colors"
                  >
                    usenishant@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-[#DC143C]">PGP:</span>{" "}
                  <span className="text-neutral-500">Available on request</span>
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mono text-xl font-bold text-[#DC143C] mb-4">
                &gt; What to Include
              </h2>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>▸ Description of the vulnerability</li>
                <li>▸ Steps to reproduce</li>
                <li>▸ Potential impact</li>
                <li>▸ Your contact information (optional)</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mono text-xl font-bold text-[#DC143C] mb-4">
                &gt; Scope
              </h2>
              <p className="text-sm leading-relaxed">
                This policy applies to <span className="text-white">www.geeknishant.tech</span> and
                all its subdomains.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mono text-xl font-bold text-[#DC143C] mb-4">
                &gt; Out of Scope
              </h2>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>▸ Third-party services (Vercel, Medium)</li>
                <li>▸ Social engineering attacks</li>
                <li>▸ Physical attacks</li>
                <li>▸ DoS/DDoS attacks</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}