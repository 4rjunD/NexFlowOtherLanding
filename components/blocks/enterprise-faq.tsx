"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does it predict burnout?",
    answer:
      "2-minute weekly check-ins + optional wearable data. AI learns each person's baseline. When patterns shift, you know 3 weeks early.",
  },
  {
    question: "What do managers get?",
    answer:
      "Specific scripts: what to say, what not to say, how to help. No guessing. Clear guidance for each person.",
  },
  {
    question: "How is privacy protected?",
    answer:
      "Employees own their data. Managers see risk alerts, not raw data. One-click delete anytime.",
  },
  {
    question: "What's the ROI?",
    answer:
      "Prevent one departure = $50K+ saved. Average: 3 prevented departures per 100 employees annually. Plus 30% fewer sick days.",
  },
  {
    question: "How is this different from surveys?",
    answer:
      "Surveys tell you what happened. NexFlow predicts what's about to happen. You act before resignations.",
  },
  {
    question: "What if employees don't participate?",
    answer:
      "94% do. Voluntary, but employees get personal insights. They want to use it.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "First insights in 2 weeks. Measurable improvements in 90 days. Guaranteed.",
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
    <div className="border-b border-[#E5E2DB]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-left text-[#111111]">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-[#999999] transition-transform duration-200 shrink-0",
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
        <p className="text-[#6B6B6B]">{answer}</p>
      </div>
    </div>
  );
}

export function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#F6F4EF]">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#1F4D3A] uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-4xl font-semibold lg:text-5xl text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
            Common questions
          </h2>
        </div>
        <div className="divide-y divide-[#E5E2DB] border-t border-[#E5E2DB]">
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
