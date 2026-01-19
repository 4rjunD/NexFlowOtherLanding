import { Metadata } from "next";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import { Footer7 } from "@/components/ui/footer-7";
import { newsletterEntries } from "@/lib/newsletter-data";

export const metadata: Metadata = {
  title: "Learn | NexFlow - AI Health Insights & Wearable Science",
  description:
    "Educational articles on AI health tracking, wearable data science, sleep optimization, stress detection, and personalized wellness insights.",
  openGraph: {
    title: "Learn | NexFlow - AI Health Insights & Wearable Science",
    description:
      "Educational articles on AI health tracking, wearable data science, sleep optimization, stress detection, and personalized wellness insights.",
  },
};

export default function LearnPage() {
  return (
    <main className="bg-[#F6F4EF] min-h-screen">
      <Header1 />
      <div className="pt-36 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <header className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-semibold text-[#111111] mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              AI Health Insights
            </h1>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-lg">
              Deep dives into wearable science, sleep optimization, stress detection, and how AI personalizes your health journey.
            </p>
          </header>

          <section aria-label="Newsletter archive">
            <div className="space-y-0 divide-y divide-[#E5E2DB] border-t border-[#E5E2DB]">
              {newsletterEntries.map((entry) => (
                <article key={entry.slug} className="py-8">
                  <Link href={entry.slug} className="group block">
                    <time className="text-xs text-[#999999] uppercase tracking-wider">
                      {entry.date}
                    </time>
                    <h2 className="text-xl md:text-2xl font-medium text-[#111111] mt-2 group-hover:text-[#1F4D3A] transition-colors">
                      {entry.title}
                    </h2>
                    <p className="text-[#6B6B6B] mt-3">
                      {entry.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-[#1F4D3A] text-sm font-medium group-hover:underline">
                      Read article →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-16 p-8 bg-white rounded-2xl border border-[#E5E2DB] text-center">
            <h3
              className="text-2xl font-semibold text-[#111111] mb-3"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Get insights delivered weekly
            </h3>
            <p className="text-[#6B6B6B] mb-6">
              Join thousands learning how to optimize their health with AI and wearable data.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block bg-[#1F4D3A] hover:bg-[#163D2E] text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
      <Footer7 />
    </main>
  );
}
