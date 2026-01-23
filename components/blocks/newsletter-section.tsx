"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsletterEntries } from "@/lib/newsletter-data";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-12 md:py-20 border-t border-[#e5e0d8] bg-[#fcf6ef]">
      <div className="container mx-auto max-w-4xl px-6 md:px-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-[42px] text-[#000] mb-5"
            style={{
              fontFamily: 'var(--font-halant), Halant, Georgia, serif',
              fontWeight: 400,
              letterSpacing: '-0.05em',
              lineHeight: '110%',
            }}
          >
            AI Health Insights, <span style={{ fontStyle: 'italic' }}>Weekly</span>
          </h2>
          <p
            className="text-[#94877c] max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Learn how wearables, sleep data, and AI work together to optimize your energy, stress, and recovery. No fluff. Just science you can use.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full border border-[#e5e0d8] bg-white text-[#000] placeholder:text-[#94877c] focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]/20 focus:border-[#1F4D3A]"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#1F4D3A] hover:bg-[#163D2E] text-[#fcf6ef] px-6 py-3 rounded-full transition-colors disabled:opacity-50"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {status === "success" && (
            <p
              className="text-[#1F4D3A] text-sm mt-3 text-center"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              You're subscribed. Check your inbox.
            </p>
          )}
        </form>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3
              className="text-xl text-[#000]"
              style={{
                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                fontWeight: 500,
              }}
            >
              Recent Editions
            </h3>
            <Link
              href="/learn"
              className="text-[#1F4D3A] text-sm flex items-center gap-1 hover:underline"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              View all editions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-[#e5e0d8] border-t border-b border-[#e5e0d8]">
            {newsletterEntries.slice(0, 3).map((entry) => (
              <article key={entry.slug} className="py-6">
                <Link href={entry.slug} className="group block">
                  <time
                    className="text-xs text-[#94877c] uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {entry.date}
                  </time>
                  <h4
                    className="text-lg text-[#000] mt-1 group-hover:text-[#1F4D3A] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {entry.title}
                  </h4>
                  <p
                    className="text-[#94877c] text-sm mt-2 line-clamp-2"
                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  >
                    {entry.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
