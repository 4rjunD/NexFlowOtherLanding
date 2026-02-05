"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
}

const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    }
}

const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    }
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

export function Features() {
    return (
        <section className="bg-[#f6f0e9] pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32 overflow-hidden">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <p
                        className="text-xs sm:text-sm text-[#1F4D3A] uppercase tracking-wider mb-3 sm:mb-4"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}
                    >
                        The Solution
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl md:text-[42px] text-[#000] max-w-[600px] mx-auto"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2',
                        }}
                    >
                        See everything. <span style={{ fontStyle: 'italic' }}>Fix it before it breaks.</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="mx-auto grid gap-2 sm:grid-cols-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {/* Top Left Card - Spot blockers instantly */}
                    <motion.div variants={slideFromLeft} className="sm:col-span-3">
                        <Card className="group h-full overflow-hidden border-[#e5e0d8] bg-white shadow-sm sm:rounded-none sm:rounded-tl-xl">
                            <CardHeader>
                                <div className="md:p-6">
                                    <p
                                        className="text-sm text-[#1F4D3A] font-medium mb-2"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        Know the moment something gets stuck
                                    </p>
                                    <p
                                        className="text-[#000] text-lg"
                                        style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                                    >
                                        Spot blockers in real-time
                                    </p>
                                    <p
                                        className="text-[#94877c] mt-3 max-w-sm text-sm"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        NexFlow watches your GitHub, Jira, Linear, and Slack. When a PR sits too long or a task goes stale, you know instantly. Not three days later.
                                    </p>
                                </div>
                            </CardHeader>

                            <div className="relative h-fit pl-6 md:pl-12">
                                <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,#f6f0e9_100%)]"></div>

                                <div className="bg-[#f6f0e9] overflow-hidden rounded-tl-lg border-l border-t border-[#e5e0d8] pl-2 pt-2">
                                    <div className="bg-white rounded-tl-lg p-4 space-y-3">
                                        <div className="flex items-center gap-3 p-3 bg-[#fcf6ef] rounded-lg border border-[#e5e0d8]">
                                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                            <span className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                                PR #847 waiting 3 days for review
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-[#fcf6ef] rounded-lg border border-[#e5e0d8]">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <span className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                                API integration blocked since Tuesday
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-[#1F4D3A] rounded-lg">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                            <span className="text-sm text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                                → Suggested: Reassign to @sarah
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Top Right Card - Autonomous Actions */}
                    <motion.div variants={slideFromRight} className="sm:col-span-2">
                        <Card className="group h-full overflow-hidden border-[#e5e0d8] bg-white shadow-sm sm:rounded-none sm:rounded-tr-xl">
                            <p
                                className="mx-auto my-4 sm:my-6 max-w-md text-balance px-4 sm:px-6 text-center text-base sm:text-lg md:text-2xl md:p-6 text-[#000]"
                                style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                            >
                                Autonomous actions. Beyond alerting.
                            </p>

                            <CardContent className="mt-auto h-fit">
                                <div className="relative mb-6 sm:mb-0">
                                    <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,#f6f0e9_100%)]"></div>
                                    <div className="overflow-hidden rounded-r-lg border border-[#e5e0d8] bg-[#1F4D3A] p-4">
                                        <div className="space-y-2 text-sm text-white/90" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-white/50">→</span> Reassign stuck tasks automatically
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-white/50">→</span> Flag overloaded team members
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-white/50">→</span> Alert when deadlines are at risk
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-white/50">→</span> Trigger workflows when patterns break
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Bottom Left Card - Hotkey */}
                    <motion.div variants={slideFromLeft} className="sm:col-span-2">
                        <Card className="group h-full p-4 sm:p-6 border-[#e5e0d8] bg-white shadow-sm sm:rounded-none sm:rounded-bl-xl md:p-12">
                            <p
                                className="mx-auto mb-8 sm:mb-12 max-w-md text-balance text-center text-base sm:text-lg md:text-2xl text-[#000]"
                                style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                            >
                                One hotkey away. Always watching.
                            </p>

                            <div className="flex justify-center gap-4 sm:gap-6">
                                <motion.div
                                    className="bg-[#f6f0e9] relative flex aspect-square size-14 sm:size-16 items-center rounded-[7px] border border-[#e5e0d8] p-3 shadow-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="absolute right-2 top-1 block text-sm text-[#94877c]">fn</span>
                                    <svg className="mt-auto size-4 text-[#1F4D3A]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                    </svg>
                                </motion.div>
                                <motion.div
                                    className="bg-[#f6f0e9] flex aspect-square size-14 sm:size-16 items-center justify-center rounded-[7px] border border-[#e5e0d8] p-3 shadow-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>K</span>
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Bottom Right Card - Integrations */}
                    <motion.div variants={slideFromRight} className="sm:col-span-3">
                        <Card className="group h-full relative border-[#e5e0d8] bg-white shadow-sm sm:rounded-none sm:rounded-br-xl">
                            <CardHeader className="p-4 sm:p-6 md:p-12">
                                <p
                                    className="text-sm text-[#1F4D3A] font-medium mb-2"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Stop tab-switching forever
                                </p>
                                <p
                                    className="text-[#000] text-base sm:text-lg"
                                    style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                                >
                                    Every tool you use. One source of truth.
                                </p>
                                <p
                                    className="text-[#94877c] mt-2 max-w-sm text-sm"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Engineering, marketing, ops. All in one view. Finally see across silos.
                                </p>
                            </CardHeader>
                            <CardContent className="relative h-fit px-4 pb-4 sm:px-6 sm:pb-6 md:px-12 md:pb-12">
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-6">
                                    {/* Slack */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.528 2.528 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.527 2.527 0 0 1-2.522 2.522h-6.314z" fill="#E01E5A"/>
                                        </svg>
                                    </motion.div>
                                    {/* GitHub */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="#000">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                    </motion.div>
                                    {/* Notion */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="#000">
                                            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.64 1.782l13.168-.933c1.636-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V3.65c0-.839.374-1.54 1.589-1.868z"/>
                                        </svg>
                                    </motion.div>
                                    {/* Linear */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="#5E6AD2">
                                            <path d="M1.04 11.18c.252-.164.493-.339.723-.524l11.582 11.582c-.185.23-.36.471-.524.722L1.04 11.18zm-.522 2.642c.095-.239.2-.472.314-.7l10.046 10.046c-.228.114-.461.22-.7.314L.518 13.822zM2.06 9.04c.162-.17.332-.333.508-.49l12.882 12.882c-.157.176-.32.346-.49.508L2.06 9.04zM14.78.518c.239.095.472.2.7.314L5.434 10.878c-.114-.228-.22-.461-.314-.7L14.78.518zm-1.82.522c.164.252.339.493.524.723L1.903 13.345c-.23-.185-.471-.36-.722-.524L12.96 1.04zm1.1 2.02c.17.162.333.332.49.508L1.668 16.45c-.176-.157-.346-.32-.508-.49L14.06 3.06zM24 12c0 6.627-5.373 12-12 12-.674 0-1.335-.056-1.981-.164L21.836 12.02c.108.646.164 1.307.164 1.981z"/>
                                        </svg>
                                    </motion.div>
                                    {/* Jira */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="#0052CC">
                                            <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23 0H11.457a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23 0z"/>
                                        </svg>
                                    </motion.div>
                                    {/* Calendar */}
                                    <motion.div
                                        className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="size-6" viewBox="0 0 24 24" fill="#1F4D3A">
                                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                                        </svg>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
