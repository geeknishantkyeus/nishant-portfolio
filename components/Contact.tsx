"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filhaal ke liye simple - baad mein email service add karenge
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="mono text-2xl md:text-3xl font-bold">
            <span className="text-[#DC143C]">&gt;</span> CONTACT
          </h2>
        </div>

        <div className="dotted-red mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left - Info */}
          <div>
            <p className="text-neutral-300 text-lg mb-8">
              {"Let's build something intelligent together."}
            </p>

            <div className="space-y-6">
              <div>
                <p className="mono text-xs text-[#DC143C] mb-1">EMAIL</p>
                <a
                  href="mailto:usenishant@gmail.com"
                  className="text-neutral-300 hover:text-[#DC143C] transition-colors"
                >
                  usenishant@gmail.com
                </a>
              </div>

              <div>
                <p className="mono text-xs text-[#DC143C] mb-1">PHONE</p>
                <a
                  href="tel:+919627658273"
                  className="text-neutral-300 hover:text-[#DC143C] transition-colors"
                >
                  +91 9627658273
                </a>
              </div>

              <div>
                <p className="mono text-xs text-[#DC143C] mb-1">LOCATION</p>
                <p className="text-neutral-300">
                  Bulandshahr, UP, India
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="mono text-sm text-green-500 border border-green-800 p-6">
                ✓ Message received. I&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mono text-xs text-neutral-500 block mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border border-[#1F1F1F] focus:border-[#DC143C] outline-none px-4 py-3 text-neutral-300 mono text-sm transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mono text-xs text-neutral-500 block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border border-[#1F1F1F] focus:border-[#DC143C] outline-none px-4 py-3 text-neutral-300 mono text-sm transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mono text-xs text-neutral-500 block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border border-[#1F1F1F] focus:border-[#DC143C] outline-none px-4 py-3 text-neutral-300 mono text-sm transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="mono text-sm px-6 py-3 border border-[#8B0000] text-[#EDEDED] hover:bg-[#1A0000] hover:border-[#DC143C] hover:shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-all"
                >
                  [ SEND MESSAGE ]
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}