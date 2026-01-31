"use client"

import { motion } from 'framer-motion'

export function TestimonialSection() {
    return (
        <section className="py-[120px] bg-[#f6f0e9]">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[24px]"
                    style={{
                        background: 'linear-gradient(135deg, #0d3320 0%, #1a5c3e 25%, #0f4028 50%, #1a5c3e 75%, #0d3320 100%)',
                    }}
                >
                    {/* Marble texture overlay */}
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            background: `
                                radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                                radial-gradient(ellipse at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
                                radial-gradient(ellipse at 60% 20%, rgba(26, 92, 62, 0.8) 0%, transparent 50%),
                                radial-gradient(ellipse at 30% 80%, rgba(15, 64, 40, 0.9) 0%, transparent 60%)
                            `,
                        }}
                    />

                    {/* Swirl effect */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    transparent,
                                    transparent 100px,
                                    rgba(212, 175, 55, 0.05) 100px,
                                    rgba(212, 175, 55, 0.05) 200px
                                )
                            `,
                        }}
                    />

                    <div className="relative z-10 px-[48px] md:px-[80px] py-[64px] md:py-[80px]">
                        {/* Quote mark */}
                        <div className="mb-[32px]">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 24C14 19.6 17.6 16 22 16V12C15.4 12 10 17.4 10 24V36H22V24H14ZM34 24C34 19.6 37.6 16 42 16V12C35.4 12 30 17.4 30 24V36H42V24H34Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        {/* Quote text */}
                        <blockquote
                            className="text-[24px] md:text-[32px] lg:text-[40px] text-white font-medium leading-[1.3] max-w-[900px]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            The signal processing here is remarkable. Cross-system pattern recognition at a level that surpasses human capacity. This is what operational intelligence should look like.
                        </blockquote>

                        {/* Attribution */}
                        <div className="mt-[40px]">
                            <p
                                className="text-[18px] md:text-[20px] text-white font-medium"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, serif',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Dr. David Nathan
                            </p>
                            <p
                                className="text-[14px] md:text-[16px] text-white/70 mt-[4px]"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                Director of the Clinical Research Center at Harvard University
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
