'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'

export function EnterpriseContact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-[#f6f0e9]">
            <div className="mx-auto max-w-4xl px-6 md:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-3xl md:text-[42px] text-[#000] mb-6"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                            lineHeight: '110%',
                        }}
                    >
                        See <span style={{ fontStyle: 'italic' }}>everything</span>
                    </h2>
                    <p
                        className="text-[#94877c] text-lg mb-10 max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        One command center. Total visibility. Autonomous control. Deploy in weeks.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="https://cal.com/arjun-dixit-0nwkzi/30min"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 text-[#fcf6ef] bg-[#1F4D3A] hover:bg-[#163D2E] transition-all duration-300 rounded-full"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '16px',
                                fontWeight: 500,
                            }}
                        >
                            Request a Demo →
                        </Link>
                        <Link
                            href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry"
                            className="inline-flex items-center justify-center px-8 py-4 text-[#000] border border-[#e5e0d8] hover:bg-white transition-all duration-300 rounded-full"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '16px',
                                fontWeight: 500,
                            }}
                        >
                            Talk to Sales →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
