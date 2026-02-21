"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
}

const integrations = [
    { src: '/logos/slack.svg', alt: 'Slack' },
    { src: '/logos/github.svg', alt: 'GitHub' },
    { src: '/logos/linear.svg', alt: 'Linear' },
    { src: '/logos/notion.svg', alt: 'Notion' },
]

export function EnterpriseHero() {
    return (
        <section style={{ background: '#111111' }}>
            <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-10 pb-3 sm:pb-4">
                {/* Hero container — rounded rectangle like o11 */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        borderRadius: 'clamp(10px, 2vw, 16px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        minHeight: 'min(calc(100vh - 72px), 900px)',
                    }}
                >
                    {/* Background video */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 0.85 }}
                    >
                        <source src="/landingpagevid.mp4" type="video/mp4" />
                    </video>

                    {/* Gradient overlay for text readability */}
                    <div
                        className="absolute inset-0 z-[1]"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
                        }}
                    />

                    {/* Content — left-aligned, anchored to bottom */}
                    <div
                        className="relative z-10 flex items-end px-4 sm:px-8 md:px-10 pb-6 sm:pb-10 md:pb-12 pt-20"
                        style={{ minHeight: 'min(calc(100vh - 72px), 900px)' }}
                    >
                        {/* Frosted panel behind text */}
                        <motion.div
                            className="relative overflow-hidden px-5 py-6 sm:px-10 sm:py-10 md:px-12 md:py-12 w-full sm:w-auto"
                            style={{
                                background: 'rgba(0, 0, 0, 0.55)',
                                backdropFilter: 'blur(24px) saturate(1.1)',
                                WebkitBackdropFilter: 'blur(24px) saturate(1.1)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                                maxWidth: '720px',
                            }}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Headline */}
                            <motion.h1
                                className="text-white mb-4 sm:mb-5"
                                style={{
                                    fontSize: 'clamp(28px, 5.5vw, 72px)',
                                    fontWeight: 500,
                                    letterSpacing: '-0.03em',
                                    lineHeight: '1.08',
                                }}
                                variants={fadeUp}
                            >
                                The AI Chief of Staff{' '}
                                <span style={{ fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif', fontStyle: 'italic' }}>
                                    that sees around corners.
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                className="text-[14px] sm:text-[16px] md:text-[17px] mb-5 sm:mb-7"
                                style={{
                                    color: 'rgba(255,255,255,0.55)',
                                    lineHeight: '1.55',
                                }}
                                variants={fadeUp}
                            >
                                Predicts bottlenecks, burnout, and project risks days before they surface. Your team stays ahead of what&apos;s coming.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5" variants={fadeUp}>
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-black bg-white text-[14px] font-medium hover:bg-white/90 transition-colors"
                                    style={{ borderRadius: '8px' }}
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    href="mailto:arjundixit@nexflowinc.com"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-medium transition-colors"
                                    style={{
                                        color: 'rgba(255,255,255,0.55)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        borderRadius: '8px',
                                    }}
                                >
                                    Try NexFlow <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
