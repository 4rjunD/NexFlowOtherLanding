"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What systems does NexFlow connect to?",
    answer:
      "Everything. Slack, Teams, Gmail. GitHub, GitLab, CI/CD. Notion, Linear, Jira, Asana. Meta Ads, Google Ads, HubSpot, Salesforce. N8N, Zapier, Make. Oura, Whoop, Apple Health. 50+ integrations and growing.",
  },
  {
    question: "How does pattern detection work?",
    answer:
      "Our models continuously analyze signals across all connected systems. When marketing spend drops while engineering velocity slows, we see it. When Slack noise spikes alongside calendar overload, we flag it. Cross-system correlations that humans miss.",
  },
  {
    question: "What autonomous actions can NexFlow take?",
    answer:
      "Pause underperforming ad campaigns. Block calendar time when overload is detected. Reassign stuck tasks. Trigger N8N or Zapier workflows. Escalate to managers. All configurable with thresholds you control.",
  },
  {
    question: "How do I stay in control?",
    answer:
      "Every action is logged with full context. One-click override on anything. Configure thresholds and rules. Approve actions before they execute or let them run autonomously. You decide the level of automation.",
  },
  {
    question: "What makes NexFlow different from dashboards?",
    answer:
      "Dashboards show you what happened. NexFlow predicts what's about to happen and acts on it. It's not another tool to check—it's an intelligence layer that watches 24/7 and handles the noise so you don't have to.",
  },
  {
    question: "How is data protected?",
    answer:
      "Enterprise-grade encryption at rest and in transit. Data never sold. On-premise deployment available for Enterprise tier. Full audit logs. You own your data.",
  },
  {
    question: "How fast is deployment?",
    answer:
      "Connect your first integrations in minutes. Baseline patterns established in 1-2 weeks. Autonomous actions configured within 30 days. Full operational intelligence within 90 days.",
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
