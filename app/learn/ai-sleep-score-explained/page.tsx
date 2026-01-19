import { Metadata } from "next";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import { Footer7 } from "@/components/ui/footer-7";

export const metadata: Metadata = {
  title: "How AI Calculates Your Sleep Score and What It Actually Means | NexFlow",
  description:
    "Your wearable gives you a number every morning. But what goes into that score? We break down the science of sleep staging, HRV, and how AI interprets your night.",
  openGraph: {
    title: "How AI Calculates Your Sleep Score and What It Actually Means",
    description:
      "Your wearable gives you a number every morning. But what goes into that score? We break down the science of sleep staging, HRV, and how AI interprets your night.",
  },
};

export default function AISleepScoreExplained() {
  return (
    <main className="bg-[#F6F4EF] min-h-screen">
      <Header1 />
      <article className="pt-36 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <header className="mb-12">
            <Link
              href="/learn"
              className="text-[#1F4D3A] text-sm font-medium hover:underline mb-4 inline-block"
            >
              ← Back to all articles
            </Link>
            <time className="block text-xs text-[#999999] uppercase tracking-wider mt-4">
              January 15, 2025
            </time>
            <h1
              className="text-3xl md:text-4xl font-semibold text-[#111111] mt-3"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              How AI Calculates Your Sleep Score and What It Actually Means
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Every morning, your wearable presents you with a number. Maybe it's 85, maybe it's 72. But what does that score actually represent? Understanding how AI calculates your sleep score can help you make better decisions about your rest.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              The Building Blocks of Sleep Scores
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Modern sleep tracking uses multiple data points to estimate sleep quality. The primary inputs include movement patterns, heart rate, and heart rate variability (HRV). Some devices also track skin temperature and blood oxygen levels.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Sleep Staging: Deep, Light, and REM
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              AI algorithms attempt to classify your sleep into stages based on physiological signals. Deep sleep shows lower heart rates and minimal movement. REM sleep exhibits irregular heart rate patterns similar to wakefulness but with near-complete stillness. Light sleep falls somewhere in between.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Why Your Score Varies Night to Night
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Several factors influence your nightly score: alcohol consumption, late meals, stress levels, exercise timing, and room temperature. The AI weighs these against your personal baseline, which is why the same sleep duration can produce different scores.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              What to Focus On
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Rather than obsessing over a single number, look for trends. Consistent scores matter more than perfect nights. Pay attention to what habits correlate with better scores for your body specifically.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t border-[#E5E2DB]">
            <h3 className="text-lg font-medium text-[#111111] mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link
                href="/learn/afternoon-energy-crash-fix"
                className="block text-[#1F4D3A] hover:underline"
              >
                Why Your Energy Crashes at 2pm and How to Fix It With Data →
              </Link>
              <Link
                href="/learn/wearable-recovery-science"
                className="block text-[#1F4D3A] hover:underline"
              >
                The Science of Recovery: What Your Wearable Data Reveals →
              </Link>
            </div>
          </footer>
        </div>
      </article>
      <Footer7 />
    </main>
  );
}
