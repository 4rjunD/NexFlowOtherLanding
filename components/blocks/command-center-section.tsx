"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const steps = [
    {
        num: '01',
        title: 'Total stack visibility',
        badge: 'Real Time',
        description: 'Connect once and see every signal across Slack, GitHub, Jira, Salesforce, and more in a single unified view.',
    },
    {
        num: '02',
        title: 'Predictive intelligence',
        badge: 'Before It Breaks',
        description: 'Proprietary models detect bottlenecks, burnout risk, and project slippage days before they surface.',
    },
    {
        num: '03',
        title: 'Autonomous operations',
        badge: '24/7',
        description: 'Automatically reassign tasks, protect focus time, and escalate critical issues. Every action logged.',
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

const fadeInRight = {
    hidden: { opacity: 0, x: 24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

export function CommandCenterSection() {
    const [openStep, setOpenStep] = useState<number | null>(null)

    return (
        <section
            id="how-it-works"
            className="py-12 sm:py-16 md:py-20"
            style={{ background: '#000000' }}
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
                <motion.div
                    className="overflow-hidden"
                    style={{
                        background: '#0A0A0A',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left column */}
                        <motion.div
                            className="px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block px-3 py-1 text-[11px] font-medium uppercase mb-5"
                                style={{
                                    color: 'rgba(255,255,255,0.4)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '6px',
                                    letterSpacing: '0.1em',
                                }}
                                variants={fadeInUp}
                            >
                                How it works
                            </motion.span>

                            <motion.h2
                                className="text-white mb-4"
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 36px)',
                                    fontWeight: 500,
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.02em',
                                }}
                                variants={fadeInUp}
                            >
                                Operational intelligence,{' '}
                                <span style={{ fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif', fontStyle: 'italic' }}>
                                    built by researchers.
                                </span>
                            </motion.h2>

                            <motion.p
                                className="text-[14px] sm:text-[15px] max-w-[420px] mb-6"
                                style={{
                                    color: 'rgba(255,255,255,0.45)',
                                    lineHeight: '1.6',
                                }}
                                variants={fadeInUp}
                            >
                                Proprietary models from Stanford and Harvard researchers. Not generic AI wrappers.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 text-black bg-white text-[13px] font-medium hover:bg-white/90 transition-colors"
                                    style={{ borderRadius: '8px' }}
                                >
                                    Book a Demo
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right column — accordion steps */}
                        <motion.div
                            className="flex flex-col justify-center px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 border-t lg:border-t-0 lg:border-l"
                            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                    }}
                                    variants={fadeInRight}
                                >
                                    <button
                                        onClick={() => setOpenStep(openStep === i ? null : i)}
                                        className="flex items-center gap-4 sm:gap-5 py-5 w-full text-left cursor-pointer group"
                                    >
                                        <span
                                            className="text-[15px] pt-0.5 shrink-0 w-6"
                                            style={{ color: 'rgba(255,255,255,0.15)' }}
                                        >
                                            {step.num}
                                        </span>

                                        <div className="flex-1 flex flex-wrap items-center gap-2">
                                            <h3 className="text-white text-[15px] sm:text-[16px] font-medium group-hover:text-white/80 transition-colors">
                                                {step.title}
                                            </h3>
                                            <span
                                                className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase"
                                                style={{
                                                    color: 'rgba(255,255,255,0.3)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: '4px',
                                                    letterSpacing: '0.06em',
                                                }}
                                            >
                                                {step.badge}
                                            </span>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: openStep === i ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <ChevronDown
                                                className="w-4 h-4 shrink-0"
                                                style={{ color: 'rgba(255,255,255,0.2)' }}
                                            />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {openStep === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p
                                                    className="text-[13px] sm:text-[14px] max-w-[380px] pb-5 pl-10 sm:pl-11"
                                                    style={{
                                                        color: 'rgba(255,255,255,0.35)',
                                                        lineHeight: '1.6',
                                                    }}
                                                >
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
