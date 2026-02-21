"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Building2, Rocket, Globe } from 'lucide-react'

const tiers = [
    {
        name: 'Startups',
        size: '5–15',
        label: 'engineers',
        description: 'Early-stage teams moving fast and shipping daily.',
        details: [
            'Spot bottlenecks before they slow your first hires',
            'Keep shipping velocity high as you scale',
            'Data-driven standups, not guesswork',
        ],
        icon: Rocket,
        image: '/art/pricing-free.png',
    },
    {
        name: 'Growth Teams',
        size: '15–50',
        label: 'engineers',
        description: 'Scaling teams adding process without losing speed.',
        details: [
            'Balance workloads across squads',
            'Catch burnout risk early',
            'Keep cycle times tight as complexity grows',
        ],
        icon: Users,
        highlight: true,
        image: '/art/pricing-team.png',
    },
    {
        name: 'Mid-Market',
        size: '50–200',
        label: 'engineers',
        description: 'Multi-team orgs that need cross-team visibility.',
        details: [
            'Org-wide engineering health dashboard',
            'Cross-team dependency tracking',
            'Sprint predictability and delivery confidence',
        ],
        icon: Building2,
        image: '/art/pricing-scale.png',
    },
    {
        name: 'Enterprise',
        size: '200+',
        label: 'engineers',
        description: 'Large organizations with distributed engineering.',
        details: [
            'Custom integrations and SSO',
            'Multi-org rollout with dedicated onboarding',
            'Executive-level reporting and benchmarks',
        ],
        icon: Globe,
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
                        Built for Teams Like Yours
                    </h2>
                    <p
                        className="text-[15px]"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                        From seed-stage to enterprise, NexFlow scales with your engineering org.
                    </p>
                </motion.div>

                {/* Team size cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {tiers.map((tier) => {
                        const Icon = tier.icon
                        return (
                            <motion.div
                                key={tier.name}
                                className="relative overflow-hidden flex flex-col group"
                                style={{
                                    background: '#0A0A0A',
                                    borderRadius: '12px',
                                    border: tier.highlight
                                        ? '1px solid rgba(255,255,255,0.12)'
                                        : '1px solid rgba(255,255,255,0.06)',
                                }}
                                variants={fadeInUp}
                                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            >
                                {/* Background art area */}
                                <div className="relative h-[120px] overflow-hidden">
                                    <Image
                                        src={tier.image}
                                        alt={tier.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ filter: 'blur(2px) brightness(0.6)', transform: 'scale(1.05)' }}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div
                                        className="absolute inset-x-0 bottom-0 h-[40px]"
                                        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="px-5 pb-5 pt-4 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.4)' }} />
                                        <h3 className="text-white text-[18px] font-medium">
                                            {tier.name}
                                        </h3>
                                    </div>

                                    <div className="flex items-baseline gap-1.5 mb-3">
                                        <span
                                            className="text-white"
                                            style={{
                                                fontSize: '36px',
                                                fontWeight: 600,
                                                letterSpacing: '-0.02em',
                                            }}
                                        >
                                            {tier.size}
                                        </span>
                                        <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                                            {tier.label}
                                        </span>
                                    </div>

                                    <p className="text-[12px] mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                        {tier.description}
                                    </p>

                                    <div className="flex flex-col gap-2 mb-5 flex-1">
                                        {tier.details.map((detail, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <div
                                                    className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                                                    style={{ background: 'rgba(255,255,255,0.25)' }}
                                                />
                                                <span
                                                    className="text-[12px] sm:text-[13px]"
                                                    style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.45' }}
                                                >
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                        target="_blank"
                                        className="block w-full text-center py-3 text-[13px] font-medium transition-all duration-200"
                                        style={{
                                            background: tier.highlight ? '#fff' : 'rgba(255,255,255,0.06)',
                                            color: tier.highlight ? '#000' : 'rgba(255,255,255,0.6)',
                                            borderRadius: '8px',
                                            border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.06)',
                                        }}
                                    >
                                        Book a Demo
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
