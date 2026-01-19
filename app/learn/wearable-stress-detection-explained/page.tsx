import { Metadata } from "next";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import { Footer7 } from "@/components/ui/footer-7";

export const metadata: Metadata = {
  title: "Stress Detection Through Wearables: HRV, Skin Temp, and Beyond | NexFlow",
  description:
    "Modern wearables track more than steps. Discover how heart rate variability and skin temperature changes reveal your stress levels before you feel them.",
  openGraph: {
    title: "Stress Detection Through Wearables: HRV, Skin Temp, and Beyond",
    description:
      "Modern wearables track more than steps. Discover how heart rate variability and skin temperature changes reveal your stress levels before you feel them.",
  },
};

export default function WearableStressDetection() {
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
              January 1, 2025
            </time>
            <h1
              className="text-3xl md:text-4xl font-semibold text-[#111111] mt-3"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Stress Detection Through Wearables: HRV, Skin Temp, and Beyond
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Your body knows you're stressed before your mind does. Modern wearables can detect these physiological signals, giving you early warning signs and the data to understand your stress patterns.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Heart Rate Variability: Your Stress Barometer
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              HRV measures the variation in time between heartbeats. Higher variability generally indicates a relaxed, adaptive state. When you're stressed, your nervous system becomes less flexible, and HRV drops. Tracking this metric over time reveals patterns invisible to conscious awareness.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Skin Temperature Changes
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Stress triggers blood flow changes as your body prepares for fight or flight. This can cause measurable shifts in skin temperature, particularly at your extremities. Ring-based wearables are particularly good at detecting these subtle changes.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Electrodermal Activity
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Some advanced wearables measure skin conductance, which changes with sweat gland activity. This is one of the most sensitive indicators of emotional arousal and stress, though it requires specialized sensors.
            </p>

            <h2
              className="text-2xl font-semibold text-[#111111] mt-10 mb-4"
              style={{ fontFamily: '"New York", Georgia, serif' }}
            >
              Building Your Stress Profile
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              AI can combine these signals to create a personalized stress profile. Over time, the algorithm learns your baseline and can identify when you're deviating from it—sometimes before you consciously register the stress.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t border-[#E5E2DB]">
            <h3 className="text-lg font-medium text-[#111111] mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link
                href="/learn/personalized-ai-health-recommendations"
                className="block text-[#1F4D3A] hover:underline"
              >
                Personalized Health: Why Generic Advice Fails and AI Adapts →
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
