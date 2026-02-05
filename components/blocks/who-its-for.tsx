"use client"

import { motion } from 'framer-motion'

const personas = [
    "Fast-moving teams",
    "10-500 engineers",
    "Remote & hybrid",
    "Scaling startups",
]

export function WhoItsFor() {
    return (
        <section className="py-10 bg-[#fcf6ef] border-y border-[#e5e0d8]">
            <div className="mx-auto max-w-[900px] px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
                >
                    <p
                        className="text-sm text-[#94877c]"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Built for
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {personas.map((persona, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 text-sm text-[#000] bg-white rounded-full border border-[#e5e0d8]"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}
                            >
                                {persona}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
