'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'

export function EnterpriseContact() {
    return (
        <section id="contact" className="py-20 sm:py-28 md:py-32 bg-[#fcf6ef]">
            <div className="mx-auto max-w-[900px] px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-3xl bg-[#1F4D3A] px-8 py-16 md:px-16 md:py-20 text-center"
                >
                    {/* Subtle gradient overlay */}
                    <div
                        className="absolute inset-0 opacity-50"
                        style={{
                            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.1) 0%, transparent 60%)',
                        }}
                    />

                    <div className="relative z-10">
                        {/* Headline */}
                        <h2
                            className="text-2xl sm:text-3xl md:text-[44px] text-white mb-4"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontWeight: 400,
                                letterSpacing: '-0.03em',
                                lineHeight: '1.2',
                            }}
                        >
                            Stop managing blind.
                        </h2>
                        <p
                            className="text-white/70 text-base md:text-lg mb-8 max-w-[500px] mx-auto"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Join the teams who see blockers, protect their people, and ship on time. Every sprint.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <Link
                                href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F4D3A] rounded-full text-base font-medium hover:bg-[#f6f0e9] transition-colors duration-200"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                Request a Demo
                            </Link>
                            <Link
                                href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry"
                                className="inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-full text-base font-medium hover:bg-white/10 transition-colors duration-200"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                Talk to Sales
                            </Link>
                        </div>

                        {/* Trust Signals - Remove objections */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/60 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20,6 9,17 4,12" />
                                </svg>
                                No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20,6 9,17 4,12" />
                                </svg>
                                Deploy in 48 hours
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20,6 9,17 4,12" />
                                </svg>
                                Cancel anytime
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
