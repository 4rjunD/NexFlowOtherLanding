"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What health data do you track?",
    answer:
      "HRV, sleep quality, recovery scores, stress markers, energy levels. Data flows from wearables and weekly pulse checks. We build a complete physiological profile for every employee.",
  },
  {
    question: "How does burnout prediction work?",
    answer:
      "The model detects declining recovery patterns, elevated stress markers, and sleep degradation. It flags risk 3 weeks before symptoms become visible. Early intervention prevents breakdown.",
  },
  {
    question: "What do managers see?",
    answer:
      "Team health scores. Burnout risk levels. Recovery recommendations. Workload rebalancing suggestions. Never individual health data. Privacy-preserving aggregation only.",
  },
  {
    question: "How is employee health data protected?",
    answer:
      "Enterprise-grade encryption. Employees own their data. Managers see wellness trends, not raw health metrics. One-click deletion anytime. No data sold. Ever.",
  },
  {
    question: "What's the ROI on workforce health?",
    answer:
      "Burnout costs $125K-$190K per departure. Prevention costs a fraction. Our clients see 40% reduction in burnout-related turnover. Lower healthcare costs. Higher output.",
  },
  {
    question: "Do employees benefit directly?",
    answer:
      "Yes. Personal health insights. Recovery recommendations. Energy optimization tips. 94% voluntary participation because employees see value.",
  },
  {
    question: "How fast do health improvements show?",
    answer:
      "Baseline health profiles in 2 weeks. Team wellness trends visible in 30 days. Measurable health improvements within 90 days.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#e5e0d8]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
      >
        <span
          className="text-left text-[#000]"
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 500,
          }}
        >
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-[#94877c] transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p
          className="text-[#94877c]"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#fcf6ef]">
      <div className="container mx-auto max-w-3xl px-6 md:px-16">
        <div className="text-center mb-12">
          <p
            className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 500,
            }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-[42px] text-[#000]"
            style={{
              fontFamily: 'var(--font-halant), Halant, Georgia, serif',
              fontWeight: 400,
              letterSpacing: '-0.05em',
              lineHeight: '110%',
            }}
          >
            Common questions
          </h2>
        </div>
        <div className="divide-y divide-[#e5e0d8] border-t border-[#e5e0d8]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
