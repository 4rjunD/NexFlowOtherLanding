"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
}

export function EnterpriseHero() {
    return (
        <section className="bg-[#f6f0e9]">
            <motion.div
                className="flex flex-col items-center justify-center px-8 md:px-16 pt-[160px] pb-[64px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="mb-[32px]"
                >
                    <span
                        className="inline-block px-[24px] py-[12px] text-[16px] text-[#2b180a] bg-[#ebe4db] rounded-full font-normal"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Backed by Character Capital
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-center max-w-[900px] mx-auto text-[36px] md:text-[52px] lg:text-[72px] font-medium text-[#2b180a]"
                    style={{
                        fontFamily: 'var(--font-halant), Halant, serif',
                        lineHeight: '105%',
                        letterSpacing: '-0.04em'
                    }}
                >
                    Predict burnout and turnover before it happens
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="mt-[32px] text-center max-w-[640px] mx-auto text-[18px] md:text-[20px] font-normal text-[#6b5d52]"
                    style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        lineHeight: '1.6'
                    }}
                >
                    NexFlow learns what makes each person tick. When patterns shift, managers get alerts three weeks early with scripts for exactly what to say and how to help.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="mt-[40px] flex flex-col sm:flex-row items-center gap-[16px]"
                >
                    <Link
                        href="https://cal.com/arjun-dixit-0nwkzi/30min"
                        target="_blank"
                        className="inline-flex items-center justify-center px-[32px] py-[16px] text-[16px] font-medium text-white bg-[#1F4D3A] rounded-full hover:bg-[#163D2E] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Book a Demo
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="inline-flex items-center justify-center px-[32px] py-[16px] text-[16px] font-medium text-[#1F4D3A] hover:text-[#163D2E] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        See how it works
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    )
}
