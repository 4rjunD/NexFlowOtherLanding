"use client"

import { motion } from 'framer-motion'
import { Link2, BarChart3, Zap, type LucideIcon } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface StepItem {
    num: number
    title: string
    description: string
    icon: LucideIcon
}

interface HowItWorksStepsProps {
    heading?: React.ReactNode
    subheading?: string
    steps?: StepItem[]
    sectionId?: string
}

const defaultSteps: StepItem[] = [
    {
        num: 1,
        title: 'Connect',
        description: 'Plug in GitHub, Slack, Linear, and your calendar in under 5 minutes. Read-only access — no code changes required.',
        icon: Link2,
    },
    {
        num: 2,
        title: 'Analyze',
        description: 'NexFlow cross-references signals across your tools to surface real patterns — not vanity metrics.',
        icon: BarChart3,
    },
    {
        num: 3,
        title: 'Act',
        description: 'Get a weekly engineering health report in your inbox with clear, prioritized recommendations you can act on Monday morning.',
        icon: Zap,
    },
]

export function HowItWorksSteps({
    heading,
    subheading = 'From zero to your first engineering health report in one week.',
    steps = defaultSteps,
    sectionId = 'how-it-works',
}: HowItWorksStepsProps) {
    return (
        <section id={sectionId} className="bg-white py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        {heading ?? <>How it <span className="font-serif-accent font-normal">works</span></>}
                    </h2>
                    {subheading && (
                        <p className="text-slate-500 text-[15px] max-w-[440px] mx-auto">
                            {subheading}
                        </p>
                    )}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* Dashed connector lines (desktop only) */}
                    <div className="hidden md:block absolute top-[52px] left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] border-t-2 border-dashed border-slate-200" />

                    {steps.map((step) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.num}
                                className="flex flex-col items-center text-center"
                                variants={fadeInUp}
                            >
                                <div className="relative z-10 w-[64px] h-[64px] rounded-full bg-emerald-500 flex items-center justify-center mb-5">
                                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <div className="text-emerald-500 text-[12px] font-semibold uppercase tracking-wider mb-2">
                                    Step {step.num}
                                </div>
                                <h3 className="text-slate-900 text-[20px] font-semibold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed max-w-[320px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
