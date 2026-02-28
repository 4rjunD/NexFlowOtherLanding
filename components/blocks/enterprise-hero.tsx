"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const integrations = [
    { name: 'GitHub', icon: '/logos/github.svg' },
    { name: 'Slack', icon: '/logos/slack.svg' },
    { name: 'Linear', icon: '/logos/linear.svg' },
    { name: 'Calendar', icon: '/logos/notion.svg' },
]

export function EnterpriseHero() {
    return (
        <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column — text */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-slate-900 mb-5"
                            style={{
                                fontSize: 'clamp(32px, 4.5vw, 56px)',
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                lineHeight: '1.1',
                            }}
                            variants={fadeInUp}
                        >
                            Your engineering org is losing $50K per developer,{' '}
                            <span className="font-serif-accent font-normal">per year.</span>
                        </motion.h1>

                        <motion.p
                            className="text-slate-500 text-[16px] sm:text-[17px] mb-8 max-w-[520px]"
                            style={{ lineHeight: '1.6' }}
                            variants={fadeInUp}
                        >
                            NexFlow delivers weekly engineering health reports with early warning signals for bottlenecks, slow PR cycles, and delivery risk — so you can fix problems before they cost you.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3" variants={fadeInUp}>
                            <Link
                                href="https://calendly.com/arjundixit3508/30min"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 text-[14px] font-medium transition-colors rounded-lg"
                            >
                                Get Your Free Engineering Audit
                            </Link>
                            <Link
                                href="#report-preview"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
                            >
                                See a sample report <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>

                        {/* Trust line */}
                        <motion.div className="mt-10 flex items-center gap-5" variants={fadeInUp}>
                            <span className="text-[12px] text-slate-400 uppercase tracking-wider font-medium">Integrates with</span>
                            <div className="flex items-center gap-4">
                                {integrations.map((item) => (
                                    <div
                                        key={item.name}
                                        className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center"
                                        title={item.name}
                                    >
                                        <img src={item.icon} alt={item.name} className="w-4 h-4 opacity-50" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right column — product screenshot placeholder (21st.dev swap point) */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm aspect-[4/3] flex items-center justify-center">
                            <div className="text-center px-8">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                                    <div className="w-6 h-6 rounded bg-emerald-500/20" />
                                </div>
                                <p className="text-slate-400 text-[14px]">Dashboard preview</p>
                                <p className="text-slate-300 text-[12px] mt-1">21st.dev component swap point</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
