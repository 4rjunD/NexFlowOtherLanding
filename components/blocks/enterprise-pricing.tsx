"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
    {
        name: "Startup",
        description: "For small, fast-moving teams",
        price: "Custom",
        period: "tailored to you",
        teamSize: "Under 25 employees",
        features: [
            "Core behavioral monitoring",
            "Team pulse checks",
            "Basic analytics dashboard",
            "Email support",
        ],
        cta: "Get in Touch",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: false,
    },
    {
        name: "Teams",
        description: "For teams ready to optimize",
        price: "999",
        period: "/month flat",
        teamSize: "Up to 50 employees",
        features: [
            "Weekly AI pulse checks",
            "Team trends dashboard",
            "Burnout risk indicators",
            "Monthly performance reports",
        ],
        cta: "Apply Now",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: false,
    },
    {
        name: "Growth",
        description: "For scaling organizations",
        price: "4,999",
        period: "/month flat",
        teamSize: "50-250 employees",
        badge: "Most Popular",
        features: [
            "Everything in Teams +",
            "Individual behavioral profiles",
            "Manager intervention playbooks",
            "Predictive departure alerts",
            "Slack & Teams integration",
            "4-hour support response",
        ],
        cta: "Apply Now",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: true,
    },
    {
        name: "Enterprise",
        description: "For industry leaders",
        price: "15,000",
        period: "+/month",
        teamSize: "250+ employees",
        features: [
            "Everything in Growth +",
            "Dedicated success manager",
            "Custom HRIS integrations",
            "On-site training & workshops",
            "24/7 priority support",
            "Quarterly executive briefings",
        ],
        cta: "Inquire",
        href: "https://cal.com/arjun-dixit-0nwkzi/30min",
        highlighted: false,
    },
]

export function EnterprisePricing() {
    return (
        <section className="py-24 md:py-32 bg-[#f6f0e9]">
            <div className="mx-auto max-w-[1200px] px-6 md:px-16">
                <div className="text-center mb-16">
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
                        The companies that get in,{' '}
                        <span style={{ fontStyle: 'italic' }}>don't leave.</span>
                    </h2>
                    <p
                        className="text-lg text-[#94877c] max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        97% client retention. Premium workforce intelligence for organizations that demand results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-6 ${
                                tier.highlighted
                                    ? "bg-[#1F4D3A] text-white ring-4 ring-[#1F4D3A]/20 lg:scale-105"
                                    : "bg-white border border-[#e5e0d8]"
                            }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span
                                        className="bg-[#1F4D3A] text-white text-xs px-4 py-1.5 rounded-full"
                                        style={{
                                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3
                                    className={`text-xl mb-2 ${
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

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    {tier.price !== "Custom" && (
                                        <span className={`text-lg ${
                                            tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                        }`}>$</span>
                                    )}
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
                                </div>
                                <p
                                    className={`text-sm mt-1 ${
                                        tier.highlighted ? "text-white/70" : "text-[#94877c]"
                                    }`}
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {tier.period}
                                </p>
                                <p
                                    className={`text-sm mt-2 ${
                                        tier.highlighted ? "text-white" : "text-[#1F4D3A]"
                                    }`}
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    {tier.teamSize}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
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

                            <Link
                                href={tier.href}
                                target={tier.href.startsWith("http") ? "_blank" : undefined}
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
                    ))}
                </div>

                {/* Anti-Guarantee Section */}
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <div className="bg-[#1F4D3A] rounded-2xl p-8 md:p-12">
                        <h3
                            className="text-2xl md:text-3xl text-white mb-6"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontWeight: 400,
                                letterSpacing: '-0.03em',
                            }}
                        >
                            This isn't for everyone.
                        </h3>
                        <p
                            className="text-white/80 mb-6 leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            NexFlow is built for serious organizations ready to invest in their workforce.
                            We don't offer refunds. We don't offer trials. If you need convincing, we're not the right fit.
                        </p>
                        <p
                            className="text-white/80 mb-8 leading-relaxed"
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
