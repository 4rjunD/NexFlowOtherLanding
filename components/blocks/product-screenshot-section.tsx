"use client"

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export function ProductScreenshotSection() {
    return (
        <section className="bg-slate-50 py-16 sm:py-20">
            <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        See your org in <span className="font-serif-accent font-normal">one view</span>
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-[440px] mx-auto">
                        Everything your engineering leaders need, updated weekly.
                    </p>
                </motion.div>

                {/* 21st.dev swap point — product screenshot */}
                <motion.div
                    className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <div className="aspect-[16/9] flex items-center justify-center bg-slate-50">
                        <div className="text-center px-8">
                            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                                <div className="w-6 h-6 rounded bg-emerald-500/20" />
                            </div>
                            <p className="text-slate-400 text-[14px]">Product screenshot</p>
                            <p className="text-slate-300 text-[12px] mt-1">21st.dev component swap point</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
