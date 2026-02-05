"use client"

import { motion } from 'framer-motion'

const steps = [
    {
        number: "01",
        title: "Connect your tools",
        description: "Link GitHub, Jira, Linear, Slack, and all your other tools in minutes. No code changes. No IT tickets.",
        visual: (
            <div className="flex items-center justify-center gap-3">
                {/* Slack */}
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e5e0d8] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
                        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
                        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
                        <path d="M15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.528 2.528 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.527 2.527 0 0 1-2.522 2.522h-6.314z" fill="#ECB22E"/>
                    </svg>
                </div>
                <div className="w-6 h-[2px] bg-[#e5e0d8]"></div>
                {/* GitHub */}
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e5e0d8] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </div>
                <div className="w-6 h-[2px] bg-[#e5e0d8]"></div>
                {/* Jira */}
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e5e0d8] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0052CC">
                        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23 0H11.457a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23 0z"/>
                    </svg>
                </div>
            </div>
        )
    },
    {
        number: "02",
        title: "AI learns your patterns",
        description: "Within 48 hours, NexFlow understands your team's normal rhythms. PR times, task velocity, communication patterns.",
        visual: (
            <div className="flex items-center justify-center">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-4 border-[#e5e0d8]"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-[#1F4D3A] border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#1F4D3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                            <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    },
    {
        number: "03",
        title: "Get alerts before problems hit",
        description: "Real-time notifications when blockers emerge, teammates get overloaded, or deadlines are at risk. Act before it costs you.",
        visual: (
            <div className="space-y-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#e5e0d8]">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>PR #142 stuck 3 days</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#e5e0d8]">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Sprint velocity -40%</span>
                </div>
            </div>
        )
    }
]

export function HowItWorks() {
    return (
        <section className="py-20 sm:py-28 md:py-32 bg-[#fcf6ef]">
            <div className="mx-auto max-w-[1000px] px-6 md:px-16">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}
                    >
                        How It Works
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl md:text-[42px] text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.03em',
                            lineHeight: '1.2',
                        }}
                    >
                        Live in 48 hours. Not 48 days.
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-[#e5e0d8] p-6 md:p-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[1fr,200px] gap-6 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span
                                            className="text-sm text-[#94877c]"
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            {step.number}
                                        </span>
                                        <div className="h-px flex-1 bg-[#e5e0d8]"></div>
                                    </div>
                                    <h3
                                        className="text-xl md:text-2xl text-[#000] mb-3"
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, serif',
                                            fontWeight: 500,
                                            letterSpacing: '-0.02em',
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-[#94877c] text-base leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    {step.visual}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outcome */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <p
                        className="text-lg text-[#1F4D3A] font-medium"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        ...and you're running smarter sprints by end of week.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
