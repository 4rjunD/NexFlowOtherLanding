"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
    {
        name: "Teams",
        description: "Self-serve",
        price: "399",
        period: "/month flat",
        teamSize: "Up to 30 employees",
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
        cta: "Book a Demo",
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
        <section className="py-[120px] bg-[#f6f0e9]">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <div className="text-center mb-[64px]">
                    <span
                        className="inline-block px-[24px] py-[12px] text-[16px] text-[#2b180a] bg-[#ebe4db] rounded-full mb-[32px]"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Investment
                    </span>
                    <h2
                        className="text-[32px] md:text-[40px] font-medium text-[#2b180a] mb-[16px]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, serif',
                            lineHeight: '110%',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        One prevented departure pays for the year.
                    </h2>
                    <p
                        className="text-[16px] text-[#6b5d52] max-w-[600px] mx-auto"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            lineHeight: '1.6'
                        }}
                    >
                        Average cost of losing someone: $50,000+
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-[16px] p-[24px] ${
                                tier.highlighted
                                    ? "bg-[#2b180a] text-[#f6f0e9] ring-4 ring-[#2b180a]/20 lg:scale-105"
                                    : "bg-white border border-[#e8d3c0]"
                            }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-[16px] left-1/2 -translate-x-1/2">
                                    <span
                                        className="bg-[#ebe4db] text-[#2b180a] text-[12px] font-medium px-[16px] py-[6px] rounded-full"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-[24px]">
                                <h3
                                    className={`text-[20px] font-medium mb-[8px] ${
                                        tier.highlighted ? "text-[#f6f0e9]" : "text-[#2b180a]"
                                    }`}
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, serif',
                                        letterSpacing: '-0.05em'
                                    }}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={`text-[14px] ${
                                        tier.highlighted ? "text-[#f6f0e9]/70" : "text-[#6b5d52]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-[24px]">
                                <div className="flex items-baseline gap-[4px]">
                                    {tier.price !== "Custom" && (
                                        <span className={`text-[18px] ${
                                            tier.highlighted ? "text-[#f6f0e9]/70" : "text-[#6b5d52]"
                                        }`}>$</span>
                                    )}
                                    <span
                                        className={`text-[36px] font-medium ${
                                            tier.highlighted ? "text-[#f6f0e9]" : "text-[#2b180a]"
                                        }`}
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, serif',
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        {tier.price}
                                    </span>
                                </div>
                                <p
                                    className={`text-[14px] mt-[4px] ${
                                        tier.highlighted ? "text-[#f6f0e9]/70" : "text-[#6b5d52]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {tier.period}
                                </p>
                                <p
                                    className={`text-[14px] font-medium mt-[8px] ${
                                        tier.highlighted ? "text-[#f6f0e9]" : "text-[#2b180a]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {tier.teamSize}
                                </p>
                            </div>

                            <ul className="space-y-[12px] mb-[32px]">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-[12px]">
                                        <Check className={`w-[20px] h-[20px] shrink-0 mt-[2px] ${
                                            tier.highlighted ? "text-[#d9c9b8]" : "text-[#2b180a]"
                                        }`} />
                                        <span
                                            className={`text-[14px] ${
                                                tier.highlighted ? "text-[#f6f0e9]/90" : "text-[#6b5d52]"
                                            }`}
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.href}
                                target={tier.href.startsWith("http") ? "_blank" : undefined}
                                className={`block w-full text-center py-[12px] px-[16px] rounded-[8px] text-[14px] font-medium transition-colors ${
                                    tier.highlighted
                                        ? "bg-[#f6f0e9] text-[#2b180a] hover:bg-white"
                                        : "bg-[#2b180a] text-[#f6f0e9] hover:bg-[#3d2a1a]"
                                }`}
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
