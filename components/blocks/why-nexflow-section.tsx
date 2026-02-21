"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const otherTools = [
    'Problems surface after they escalate.',
    'Manual check-ins and status updates.',
    'Siloed data across disconnected tools.',
]

const nexflow = [
    'Predicts risks days before they block.',
    'Autonomous agents act on your behalf, 24/7.',
    'Unified intelligence across your entire stack.',
]

const outcomes = [
    {
        size: 'Startups',
        label: '5-30 people',
        stat: '2x',
        statLabel: 'faster shipping',
        results: [
            'Catch blockers before standup',
            'Prevent early-stage burnout',
            'One dashboard, not four',
        ],
    },
    {
        size: 'Mid-Market',
        label: '30-200 people',
        stat: '40%',
        statLabel: 'faster PR cycles',
        results: [
            'Real-time bottleneck alerts',
            'Save $120K+/yr in attrition costs',
            'Auto-generated leadership reports',
        ],
    },
    {
        size: 'Enterprise',
        label: '200+ people',
        stat: '60%',
        statLabel: 'less overhead',
        results: [
            'Visibility across 10+ teams',
            'Predict slippage 2 weeks early',
            'Autonomous agent operations',
        ],
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
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const pointReveal = {
    hidden: { opacity: 0, x: -12 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
}

const pointStagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
}

export function WhyNexflowSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section
            id="why-nexflow"
            className="py-12 sm:py-16 md:py-20"
            style={{ background: '#000000' }}
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 md:mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-block px-3 py-1 text-[11px] font-medium uppercase mb-4"
                        style={{
                            color: 'rgba(255,255,255,0.4)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '6px',
                            letterSpacing: '0.1em',
                        }}
                        variants={fadeInUp}
                    >
                        Why NexFlow
                    </motion.span>

                    <motion.h2
                        className="text-white mb-3"
                        style={{
                            fontSize: 'clamp(26px, 3.5vw, 40px)',
                            fontWeight: 500,
                            letterSpacing: '-0.025em',
                            lineHeight: '1.15',
                        }}
                        variants={fadeInUp}
                    >
                        Operations in the{' '}
                        <span style={{ fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif', fontStyle: 'italic' }}>
                            AI age
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Comparison cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* Other tools card */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0A0A0A',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="relative h-[160px] overflow-hidden">
                            <Image
                                src="/art/compare-other.png"
                                alt="Other tools"
                                fill
                                className="object-cover"
                                style={{ filter: 'blur(2px) brightness(0.6)', transform: 'scale(1.05)' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div
                                className="absolute inset-x-0 bottom-0 h-[60px]"
                                style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
                            />
                            <h3
                                className="absolute bottom-0 left-0 px-6 pb-4 text-white z-10"
                                style={{
                                    fontSize: 'clamp(24px, 3vw, 32px)',
                                    fontWeight: 500,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Other tools
                            </h3>
                        </div>

                        <motion.div
                            className="px-6 py-5 flex flex-col gap-4"
                            variants={pointStagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {otherTools.map((point, i) => (
                                <motion.div key={i} className="flex items-start gap-3" variants={pointReveal}>
                                    <X
                                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                        style={{ color: 'rgba(255,255,255,0.25)' }}
                                    />
                                    <span
                                        className="text-[13px] sm:text-[14px]"
                                        style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}
                                    >
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* NexFlow card */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0D0D0D',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="relative h-[160px] overflow-hidden">
                            <Image
                                src="/art/compare-nexflow.png"
                                alt="NexFlow"
                                fill
                                className="object-cover"
                                style={{ filter: 'blur(2px) brightness(0.6)', transform: 'scale(1.05)' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div
                                className="absolute inset-x-0 bottom-0 h-[60px]"
                                style={{ background: 'linear-gradient(to top, #0D0D0D, transparent)' }}
                            />
                            <h3
                                className="absolute bottom-0 left-0 px-6 pb-4 z-10"
                                style={{
                                    fontSize: 'clamp(24px, 3vw, 32px)',
                                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    letterSpacing: '-0.01em',
                                    color: 'rgba(255,255,255,0.9)',
                                }}
                            >
                                NexFlow
                            </h3>
                        </div>

                        <motion.div
                            className="px-6 py-5 flex flex-col gap-4"
                            variants={pointStagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {nexflow.map((point, i) => (
                                <motion.div key={i} className="flex items-start gap-3" variants={pointReveal}>
                                    <Check
                                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                        style={{ color: 'rgba(255,255,255,0.55)' }}
                                    />
                                    <span
                                        className="text-[13px] sm:text-[14px]"
                                        style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}
                                    >
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Outcomes — tab selector */}
                <motion.div
                    className="overflow-hidden"
                    style={{
                        background: '#0A0A0A',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Tab buttons */}
                    <div
                        className="flex border-b"
                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                        {outcomes.map((tier, i) => (
                            <button
                                key={tier.size}
                                onClick={() => setActiveTab(i)}
                                className="flex-1 relative py-3.5 sm:py-4 text-center cursor-pointer transition-colors"
                                style={{
                                    color: activeTab === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                                    borderRight: i < outcomes.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                }}
                            >
                                <span className="text-[13px] sm:text-[14px] font-medium">{tier.size}</span>
                                <span
                                    className="hidden sm:inline text-[11px] ml-1.5"
                                    style={{ color: 'rgba(255,255,255,0.2)' }}
                                >
                                    {tier.label}
                                </span>

                                {/* Active indicator */}
                                {activeTab === i && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                                        style={{ background: 'rgba(255,255,255,0.4)' }}
                                        layoutId="activeTab"
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start"
                            >
                                {/* Big stat */}
                                <div className="shrink-0">
                                    <span
                                        className="text-white block"
                                        style={{
                                            fontSize: 'clamp(40px, 5vw, 56px)',
                                            fontWeight: 600,
                                            letterSpacing: '-0.03em',
                                            lineHeight: '1',
                                        }}
                                    >
                                        {outcomes[activeTab].stat}
                                    </span>
                                    <span
                                        className="text-[12px] sm:text-[13px] mt-1 block"
                                        style={{ color: 'rgba(255,255,255,0.35)' }}
                                    >
                                        {outcomes[activeTab].statLabel}
                                    </span>
                                </div>

                                {/* Results list */}
                                <div className="flex flex-col gap-3 flex-1">
                                    {outcomes[activeTab].results.map((result, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-2.5"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.35, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <Check
                                                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                                style={{ color: 'rgba(255,255,255,0.3)' }}
                                            />
                                            <span
                                                className="text-[13px] sm:text-[14px]"
                                                style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}
                                            >
                                                {result}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
