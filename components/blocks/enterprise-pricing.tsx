"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
    {
        name: "Startup",
        description: "≤25 people",
        price: "497",
        period: "/mo",
        features: [
            "Basic stuck alerts",
            "3 integrations",
            "Weekly reports",
            "Email support",
        ],
        bonusValue: "$8K",
        bonuses: [
            "Founder call",
            "Setup checklist",
            "Team playbook export",
        ],
        cta: "Talk to Founders",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: false,
    },
    {
        name: "Growth",
        description: "25-100 people",
        price: "1,497",
        period: "/mo",
        badge: "Most Popular",
        features: [
            "Everything in Startup",
            "Real-time detection",
            "AI Impact Tracker",
            "Burnout Radar",
            "Slack/Teams alerts",
            "Decision Playbook",
        ],
        bonusValue: "$15K",
        bonuses: [
            "2x Founder sessions",
            "Custom alert tuning",
            "Priority Slack support",
        ],
        cta: "Start 14-Day Pilot",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: true,
    },
    {
        name: "Scale",
        description: "100-250 people",
        price: "3,997",
        period: "/mo",
        features: [
            "Everything in Growth",
            "Unlimited integrations",
            "Custom workflows",
            "Priority onboarding",
            "Quarterly reviews",
            "4-hour support",
        ],
        bonusValue: "$25K",
        bonuses: [
            "Dedicated success mgr",
            "Custom model training",
        ],
        cta: "Talk to Sales",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: false,
    },
]

export function EnterprisePricing() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#fcf6ef]">
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-16">
                <div className="text-center mb-10 sm:mb-16">
                    <p
                        className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 500,
                        }}
                    >
                        Investment
                    </p>
                    <h2
                        className="text-3xl md:text-[42px] text-[#000] mb-5"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                            lineHeight: '110%',
                        }}
                    >
                        Invest in{' '}
                        <span style={{ fontStyle: 'italic' }}>operational intelligence</span>
                    </h2>
                    <p
                        className="text-lg text-[#94877c] max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Stop paying for scattered tools. One system. Total visibility. Autonomous control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-6 flex flex-col ${
                                tier.highlighted
                                    ? "bg-[#1F4D3A] text-white ring-4 ring-[#1F4D3A]/20 md:scale-105"
                                    : "bg-white border border-[#e5e0d8]"
                            }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span
                                        className="bg-[#1F4D3A] text-white text-xs px-4 py-1.5 rounded-full border-2 border-white"
                                        style={{
                                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-5">
                                <h3
                                    className={`text-xl mb-1 ${
                                        tier.highlighted ? "text-white" : "text-[#000]"
                                    }`}
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={`text-sm ${
                                        tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-0.5">
                                    <span className={`text-lg ${
                                        tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                    }`}>$</span>
                                    <span
                                        className={`text-4xl tracking-tight ${
                                            tier.highlighted ? "text-white" : "text-[#000]"
                                        }`}
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {tier.price}
                                    </span>
                                    <span className={`text-lg ${
                                        tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                    }`}>{tier.period}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                                            tier.highlighted ? "text-white" : "text-[#1F4D3A]"
                                        }`} />
                                        <span
                                            className={`text-sm ${
                                                tier.highlighted ? "text-white/90" : "text-[#94877c]"
                                            }`}
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Bonuses */}
                            <div className={`mb-6 p-4 rounded-xl ${
                                tier.highlighted ? "bg-white/10" : "bg-[#f6f0e9]"
                            }`}>
                                <p
                                    className={`text-xs uppercase tracking-wider mb-3 ${
                                        tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600 }}
                                >
                                    Bonuses ({tier.bonusValue} value):
                                </p>
                                <ul className="space-y-2">
                                    {tier.bonuses.map((bonus, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className={`${
                                                tier.highlighted ? "text-white/50" : "text-[#1F4D3A]"
                                            }`}>•</span>
                                            <span
                                                className={`text-sm ${
                                                    tier.highlighted ? "text-white/90" : "text-[#000]"
                                                }`}
                                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                            >
                                                {bonus}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                                <Link
                                    href={tier.href}
                                    target="_blank"
                                    className={`block w-full py-3 px-4 text-center rounded-full transition-colors ${
                                        tier.highlighted
                                            ? "bg-white text-[#1F4D3A] hover:bg-[#fcf6ef]"
                                            : "bg-[#1F4D3A] text-white hover:bg-[#163D2E]"
                                    }`}
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                    }}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Anti-Guarantee Section */}
                <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center">
                    <div className="bg-[#1F4D3A] rounded-2xl p-6 sm:p-8 md:p-12">
                        <h3
                            className="text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontWeight: 400,
                                letterSpacing: '-0.03em',
                            }}
                        >
                            We build for the serious.
                        </h3>
                        <p
                            className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            No trials. No refunds. Results only. Our platform is built for organizations ready to transform how they operate.
                        </p>
                        <p
                            className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Our clients see results because they commit fully. If that's you, apply below.
                        </p>
                        <p
                            className="text-white/60 text-sm"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontStyle: 'italic',
                            }}
                        >
                            We review every application. Not everyone qualifies.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
