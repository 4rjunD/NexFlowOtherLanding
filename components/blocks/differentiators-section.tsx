"use client"

import { motion } from 'framer-motion'
import { Signal, Heart, Plug, type LucideIcon } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface DifferentiatorItem {
    icon: LucideIcon
    title: string
    description: string
}

interface DifferentiatorsSectionProps {
    heading?: React.ReactNode
    items?: DifferentiatorItem[]
    sectionId?: string
}

const defaultItems: DifferentiatorItem[] = [
    {
        icon: Signal,
        title: 'Signals, not noise',
        description: 'We don\'t flood you with alerts. NexFlow surfaces the 3-5 things that actually matter this week — with context and recommended actions.',
    },
    {
        icon: Heart,
        title: 'Team health, not surveillance',
        description: 'We measure team-level patterns, not individual keystrokes. NexFlow helps managers support their teams, not spy on them.',
    },
    {
        icon: Plug,
        title: 'Connects, doesn\'t replace',
        description: 'NexFlow works with your existing tools. No migration, no new workflow. Just a layer of intelligence on top of what you already use.',
    },
]

export function DifferentiatorsSection({
    heading,
    items = defaultItems,
    sectionId,
}: DifferentiatorsSectionProps) {
    return (
        <section id={sectionId} className="bg-white py-16 sm:py-20">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        {heading ?? <>Why teams <span className="font-serif-accent font-normal">choose</span> NexFlow</>}
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 text-center"
                                variants={fadeInUp}
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                                    <Icon className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-slate-900 text-[18px] font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
