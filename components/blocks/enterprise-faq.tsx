"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does it predict burnout?",
    answer:
      "2-minute weekly check-ins plus optional wearable data. AI learns each person. When patterns shift, you know three weeks early.",
  },
  {
    question: "What do managers get?",
    answer:
      "Scripts for every situation. What to say, what to avoid, how to help. Clear guidance for each person.",
  },
  {
    question: "How is privacy protected?",
    answer:
      "Employees own their data. Managers see alerts, not raw data. One-click delete anytime.",
  },
  {
    question: "What is the ROI?",
    answer:
      "One prevented departure saves $50K+. Average: 3 prevented departures per 100 employees annually.",
  },
  {
    question: "How is this different from surveys?",
    answer:
      "Surveys show what happened. NexFlow predicts what will happen. You act before resignations.",
  },
  {
    question: "What if employees do not participate?",
    answer:
      "94% do. Voluntary, but employees get personal insights. They want to use it.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "First insights in two weeks. Measurable improvements in 90 days.",
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
    <div className="border-b border-[#e8d3c0]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-[20px] text-left gap-[16px]"
      >
        <span
          className="font-medium text-left text-[18px] text-[#2b180a]"
          style={{
            fontFamily: 'var(--font-halant), Halant, serif',
            letterSpacing: '-0.05em'
          }}
        >
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-[20px] h-[20px] text-[#c4b5a5] transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-[16px]" : "max-h-0"
        )}
      >
        <p
          className="text-[16px] text-[#6b5d52]"
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            lineHeight: '1.6'
          }}
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
    <section className="py-[120px] bg-[#f6f0e9]">
      <div className="mx-auto max-w-[800px] px-8 md:px-16">
        <div className="text-center mb-[64px]">
          <span
            className="inline-block px-[24px] py-[12px] text-[16px] text-[#2b180a] bg-[#ebe4db] rounded-full mb-[32px]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            FAQ
          </span>
          <h2
            className="text-[32px] md:text-[40px] font-medium text-[#2b180a]"
            style={{
              fontFamily: 'var(--font-halant), Halant, serif',
              lineHeight: '110%',
              letterSpacing: '-0.05em'
            }}
          >
            Common questions
          </h2>
        </div>
        <div className="divide-y divide-[#e8d3c0] border-t border-[#e8d3c0]">
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
