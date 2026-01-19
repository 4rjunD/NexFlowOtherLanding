"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
    {
        name: "Teams",
        description: "Self-serve",
        price: "399",
        period: "/month flat",
        teamSize: "Up to 30 employees",
        badge: "Self-Serve",
        features: [
            "Weekly check-ins",
            "Burnout risk indicators",
            "Team trends dashboard",
            "Monthly reports",
        ],
        cta: "Start Free Trial",
        href: "mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Teams%20Plan%20Inquiry",
        highlighted: false,
    },
    {
        name: "Starter",
        description: "AI predictions",
        price: "29",
        period: "/employee/month",
        teamSize: "25-100 employees",
        features: [
            "Everything in Teams",
            "Wearable sync",
            "Behavioral profiles",
            "3-week early warning",
            "Slack & Teams",
        ],
        cta: "Get Started",
        href: "mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Starter%20Plan%20Inquiry",
        highlighted: false,
    },
    {
        name: "Pro",
        description: "Manager scripts",
        price: "49",
        period: "/employee/month",
        teamSize: "50-500 employees",
        badge: "Most Popular",
        features: [
            "Everything in Starter",
            "Intervention scripts",
            "Real-time alerts",
            "Departure predictions",
            "4hr support response",
        ],
        cta: "Book a Strategy Call",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: true,
    },
    {
        name: "Enterprise",
        description: "White-glove",
        price: "Custom",
        period: "tailored pricing",
        teamSize: "200+ employees",
        features: [
            "Everything in Pro",
            "Dedicated success manager",
            "Custom HRIS integrations",
            "On-site training",
            "24/7 support",
        ],
        cta: "Contact Sales",
        href: "mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Plan%20Inquiry",
        highlighted: false,
    },
]

export function EnterprisePricing() {
    return (
        <section className="py-24 bg-[#EBE8E1]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-[#1F4D3A] uppercase tracking-wider mb-4">
                        Investment
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-medium tracking-tight text-[#111111] mb-4"
                        style={{ fontFamily: '"New York", Georgia, serif' }}
                    >
                        Prevent one departure. NexFlow pays for itself.
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                        Average departure cost: $50,000+.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-6 ${
                                tier.highlighted
                                    ? "bg-[#1F4D3A] text-white ring-4 ring-[#1F4D3A]/20 lg:scale-105"
                                    : "bg-white border border-[#E5E2DB]"
                            }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#F2C94C] text-[#111111] text-xs font-semibold px-4 py-1.5 rounded-full">
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3
                                    className={`text-xl font-semibold mb-2 ${
                                        tier.highlighted ? "text-white" : "text-[#111111]"
                                    }`}
                                    style={{ fontFamily: '"New York", Georgia, serif' }}
                                >
                                    {tier.name}
                                </h3>
                                <p className={`text-sm ${
                                    tier.highlighted ? "text-white/70" : "text-[#6B6B6B]"
                                }`}>
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    {tier.price !== "Custom" && (
                                        <span className={`text-lg ${
                                            tier.highlighted ? "text-white/70" : "text-[#6B6B6B]"
                                        }`}>$</span>
                                    )}
                                    <span
                                        className={`text-4xl font-medium tracking-tight ${
                                            tier.highlighted ? "text-white" : "text-[#111111]"
                                        }`}
                                        style={{ fontFamily: '"New York", Georgia, serif' }}
                                    >
                                        {tier.price}
                                    </span>
                                </div>
                                <p className={`text-sm mt-1 ${
                                    tier.highlighted ? "text-white/70" : "text-[#6B6B6B]"
                                }`}>
                                    {tier.period}
                                </p>
                                <p className={`text-sm font-medium mt-2 ${
                                    tier.highlighted ? "text-white" : "text-[#1F4D3A]"
                                }`}>
                                    {tier.teamSize}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                                            tier.highlighted ? "text-[#F2C94C]" : "text-[#1F4D3A]"
                                        }`} />
                                        <span className={`text-sm ${
                                            tier.highlighted ? "text-white/90" : "text-[#6B6B6B]"
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                className={`w-full ${
                                    tier.highlighted
                                        ? "bg-white text-[#1F4D3A] hover:bg-[#F6F4EF]"
                                        : "bg-[#1F4D3A] text-white hover:bg-[#163D2E]"
                                }`}
                                size="lg"
                            >
                                <Link href={tier.href} target={tier.href.startsWith("http") ? "_blank" : undefined}>
                                    {tier.cta}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#6B6B6B] text-sm">
                        90-day guarantee.
                        <span className="text-[#1F4D3A] font-medium"> No results? Full refund.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
