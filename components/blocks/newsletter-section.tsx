"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="py-12 md:py-20 border-t border-[#E5E2DB]">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#111111] mb-4"
            style={{ fontFamily: '"New York", Georgia, serif' }}
          >
            AI Health Insights, Weekly
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
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
              className="flex-1 px-4 py-3 rounded-xl border border-[#E5E2DB] bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]/20 focus:border-[#1F4D3A]"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#1F4D3A] hover:bg-[#163D2E] text-white px-6 py-3 rounded-xl"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          {status === "success" && (
            <p className="text-[#1F4D3A] text-sm mt-3 text-center">
              You're subscribed. Check your inbox.
            </p>
          )}
        </form>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-medium text-[#111111]">Recent Editions</h3>
            <Link
              href="/learn"
              className="text-[#1F4D3A] text-sm font-medium flex items-center gap-1 hover:underline"
            >
              View all editions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-[#E5E2DB] border-t border-b border-[#E5E2DB]">
            {newsletterEntries.slice(0, 3).map((entry) => (
              <article key={entry.slug} className="py-6">
                <Link href={entry.slug} className="group block">
                  <time className="text-xs text-[#999999] uppercase tracking-wider">
                    {entry.date}
                  </time>
                  <h4 className="text-lg font-medium text-[#111111] mt-1 group-hover:text-[#1F4D3A] transition-colors">
                    {entry.title}
                  </h4>
                  <p className="text-[#6B6B6B] text-sm mt-2 line-clamp-2">
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
