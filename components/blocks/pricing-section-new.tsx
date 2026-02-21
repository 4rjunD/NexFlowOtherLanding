"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: '',
        description: 'One-time 90-day engineering audit:',
        features: [
            'PR cycle time analysis',
            'Contributor workload breakdown',
            'Top 3 problems and recommendations',
        ],
        cta: 'Get Your Free Audit',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        highlight: false,
        image: '/art/pricing-free.png',
    },
    {
        name: 'Team',
        price: '$40',
        period: '/seat/mo',
        description: 'Everything in Free, running live:',
        features: [
            'Weekly Monday briefing in Slack or email',
            'Real-time PR bottleneck alerts',
            'Shipping velocity dashboard',
            'Workload balance tracking',
        ],
        cta: 'Get Started',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        highlight: true,
        image: '/art/pricing-team.png',
    },
    {
        name: 'Scale',
        price: '$80',
        period: '/seat/mo',
        description: 'Everything in Team, plus:',
        features: [
            'Linear/Jira sprint health tracking',
            'Burnout risk detection',
            'Predictive bottleneck alerts',
            'Benchmarks against similar-stage teams',
            'Monthly deep-dive report',
        ],
        cta: 'Get Started',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        highlight: false,
        image: '/art/pricing-scale.png',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Everything in Scale, plus:',
        features: [
            'Custom integrations',
            'SSO and security compliance',
            'Multi-team org-wide rollout',
            'Dedicated onboarding',
            'SLA and priority support',
        ],
        cta: 'Book a Demo',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        highlight: false,
        image: '/art/pricing-enterprise.png',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
}

export function PricingSection() {
    const [teamSize, setTeamSize] = useState(10)
    const monthly = teamSize * 40

    return (
        <section
            id="pricing"
            className="py-12 sm:py-16 md:py-20"
            style={{ background: '#000000' }}
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    className="mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2
                        className="text-white mb-2"
                        style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                            lineHeight: '1.1',
                        }}
                    >
                        Choose Your Plan
                    </h2>
                    <p
                        className="text-[15px]"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                        Start for free, then scale as you grow.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            className="relative overflow-hidden flex flex-col group"
                            style={{
                                background: '#0A0A0A',
                                borderRadius: '12px',
                                border: plan.highlight
                                    ? '1px solid rgba(255,255,255,0.12)'
                                    : '1px solid rgba(255,255,255,0.06)',
                            }}
                            variants={fadeInUp}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                        >
                            {/* Background art area */}
                            <div className="relative h-[120px] overflow-hidden">
                                <Image
                                    src={plan.image}
                                    alt={plan.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ filter: 'blur(2px) brightness(0.6)', transform: 'scale(1.05)' }}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                {/* Bottom fade into card */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-[40px]"
                                    style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
                                />
                            </div>

                            {/* Content */}
                            <div className="px-5 pb-5 pt-4 flex flex-col flex-1">
                                <h3 className="text-white text-[18px] font-medium mb-1.5">
                                    {plan.name}
                                </h3>

                                <div className="flex items-baseline gap-1 mb-3">
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: plan.price === 'Custom' ? '28px' : '36px',
                                            fontWeight: 600,
                                            letterSpacing: '-0.02em',
                                        }}
                                    >
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                <p className="text-[12px] mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                    {plan.description}
                                </p>

                                <div className="flex flex-col gap-2 mb-5 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <Check
                                                className="w-3 h-3 mt-0.5 shrink-0"
                                                style={{ color: 'rgba(255,255,255,0.35)' }}
                                            />
                                            <span
                                                className="text-[12px] sm:text-[13px]"
                                                style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.45' }}
                                            >
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={plan.ctaHref}
                                    target="_blank"
                                    className="block w-full text-center py-3 text-[13px] font-medium transition-all duration-200"
                                    style={{
                                        background: plan.highlight ? '#fff' : 'rgba(255,255,255,0.06)',
                                        color: plan.highlight ? '#000' : 'rgba(255,255,255,0.6)',
                                        borderRadius: '8px',
                                        border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.06)',
                                    }}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Calculator */}
                <motion.div
                    className="mt-6 overflow-hidden"
                    style={{
                        background: '#0A0A0A',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                        {/* Slider side */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                    Team size
                                </span>
                                <span className="text-white text-[14px] font-medium">
                                    {teamSize} people
                                </span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={100}
                                value={teamSize}
                                onChange={(e) => setTeamSize(Number(e.target.value))}
                                className="w-full h-1 appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) ${teamSize}%, rgba(255,255,255,0.06) ${teamSize}%, rgba(255,255,255,0.06) 100%)`,
                                    borderRadius: '4px',
                                    outline: 'none',
                                }}
                            />
                            <div className="flex justify-between mt-1.5">
                                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)' }}>1</span>
                                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)' }}>100</span>
                            </div>
                        </div>

                        {/* Price display */}
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-[11px] uppercase font-medium block mb-1" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
                                    Monthly cost
                                </span>
                                <span className="text-white text-[32px] font-semibold" style={{ letterSpacing: '-0.02em' }}>
                                    ${monthly.toLocaleString()}
                                </span>
                                <span className="text-[13px] ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>/mo</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom note */}
                    <div
                        className="px-4 sm:px-6 md:px-8 py-3"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
                    >
                        <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                            Less than your team&apos;s weekly coffee budget.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
