"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const steps = [
    {
        number: "01",
        title: "Connect your team",
        badge: "Week 1",
        description: "Two-minute weekly check-ins. Optional wearable sync. 94% participation because employees get insights too."
    },
    {
        number: "02",
        title: "AI learns patterns",
        badge: "Weeks 2-4",
        description: "AI builds a baseline for each person. Learns what normal looks like for them."
    },
    {
        number: "03",
        title: "Predict and prevent",
        badge: "Ongoing",
        description: "Alerts three weeks early. Managers get scripts for what to say and how to help."
    }
]

export function HowWeWork() {
    return (
        <section className="bg-[#f6f0e9] py-[120px]">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-[120px] lg:self-start"
                    >
                        {/* Badge */}
                        <span
                            className="inline-block px-[24px] py-[12px] text-[16px] text-[#2b180a] bg-[#ebe4db] rounded-full mb-[32px]"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            How we work
                        </span>

                        {/* Headline */}
                        <h2
                            className="text-[32px] md:text-[40px] font-medium text-[#2b180a] mb-[24px]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                lineHeight: '110%',
                                letterSpacing: '-0.05em'
                            }}
                        >
                            AI-powered predictions, human-centered care.
                        </h2>

                        {/* Description */}
                        <p
                            className="text-[16px] text-[#6b5d52] mb-[32px]"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                lineHeight: '1.6'
                            }}
                        >
                            We built NexFlow after watching great teams lose great people. Our AI learns what makes each person tick. Then tells managers exactly how to help.
                        </p>

                        {/* CTA */}
                        <Link
                            href="https://calendly.com/arjundixit3508/30min"
                            target="_blank"
                            className="inline-flex items-center justify-center px-[24px] py-[12px] text-[16px] font-medium text-white bg-[#1F4D3A] rounded-[8px] hover:bg-[#163D2E] transition-colors duration-200"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Book a Demo
                        </Link>
                    </motion.div>

                    {/* Right Side - Steps */}
                    <div className="relative">
                        <div className="space-y-[42px]">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                                    viewport={{ once: true }}
                                    className="flex gap-[24px]"
                                >
                                    {/* Number with line */}
                                    <div className="flex flex-col items-center">
                                        <span
                                            className="text-[14px] text-[#c4b5a5]"
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            {step.number}
                                        </span>
                                        {index < steps.length - 1 && (
                                            <div className="w-px h-full bg-[#e0d5c8] mt-[12px] min-h-[60px]" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-[12px] mb-[8px] flex-wrap">
                                            <h3
                                                className="text-[20px] md:text-[24px] font-medium text-[#2b180a]"
                                                style={{
                                                    fontFamily: 'var(--font-halant), Halant, serif',
                                                    letterSpacing: '-0.05em'
                                                }}
                                            >
                                                {step.title}
                                            </h3>
                                            <span
                                                className="inline-block px-[12px] py-[4px] text-[12px] text-[#6b5d52] border border-[#ddd0c2] rounded-full"
                                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                            >
                                                {step.badge}
                                            </span>
                                        </div>
                                        <p
                                            className="text-[16px] text-[#6b5d52]"
                                            style={{
                                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
