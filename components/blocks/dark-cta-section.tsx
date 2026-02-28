"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface DarkCtaSectionProps {
    heading?: React.ReactNode
    description?: string
    buttonText?: string
    calLink?: string
}

export function DarkCtaSection({
    heading,
    description,
    buttonText,
    calLink = 'https://calendly.com/arjundixit3508/30min',
}: DarkCtaSectionProps) {
    const [email, setEmail] = useState('')
    const showButton = !!buttonText

    return (
        <section className="bg-slate-900 py-16 md:py-24">
            <div className="max-w-[640px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-white text-[28px] sm:text-[40px] font-semibold tracking-tight mb-4"
                        variants={fadeInUp}
                    >
                        {heading ?? <>Stop flying <span className="font-serif-accent font-normal">blind.</span></>}
                    </motion.h2>
                    <motion.p
                        className="text-slate-400 text-[15px] mb-8 max-w-[440px] mx-auto"
                        variants={fadeInUp}
                    >
                        {description ?? "Get a free engineering health audit and see what\u2019s hiding in your team\u2019s data."}
                    </motion.p>

                    {showButton ? (
                        <motion.div variants={fadeInUp}>
                            <a
                                href={calLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-[15px] font-medium rounded-full transition-colors"
                            >
                                {buttonText} <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ) : (
                        <motion.form
                            className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
                            variants={fadeInUp}
                            onSubmit={(e) => {
                                e.preventDefault()
                                window.open(`${calLink}?email=${encodeURIComponent(email)}`, '_blank')
                            }}
                        >
                            <input
                                type="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-[14px] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-[14px] font-medium rounded-lg transition-colors shrink-0"
                            >
                                Get Free Audit
                            </button>
                        </motion.form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
