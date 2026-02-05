'use client';

import React from "react";
import { motion } from "framer-motion";

export function EnterpriseFeaturesSection() {
    return (
        <section className="relative py-16 sm:py-24 md:py-32 bg-[#fcf6ef] overflow-hidden">
            <div className="container max-w-[1200px] w-full px-4 sm:px-6 md:px-16 relative z-10 mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-3"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}
                    >
                        Sound familiar?
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl md:text-[40px] text-[#000] max-w-[600px] mx-auto"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.03em',
                            lineHeight: '1.15',
                        }}
                    >
                        Every Monday, you're already behind.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                    {/* Left - Product Mockup showing problems */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div
                            className="rounded-3xl p-6 shadow-xl"
                            style={{
                                background: 'linear-gradient(145deg, #e8e8ec 0%, #d4d4d8 100%)',
                            }}
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                {/* Problem Feed */}
                                <div className="space-y-2">
                                    <div className="flex gap-3 px-3 py-2.5 rounded-lg bg-[#fcf6ef] border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                                        <div>
                                            <p className="text-[13px] text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>PR #847 blocked for 4 days</p>
                                            <p className="text-[11px] text-[#94877c] mt-0.5" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Waiting on code review from backend team</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 px-3 py-2.5 rounded-lg bg-[#fcf6ef] border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <div>
                                            <p className="text-[13px] text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>3 engineers over capacity this sprint</p>
                                            <p className="text-[11px] text-[#94877c] mt-0.5" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Workload 2-3x higher than team average</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 px-3 py-2.5 rounded-lg bg-[#fcf6ef] border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <div>
                                            <p className="text-[13px] text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>Sprint velocity trending 40% below target</p>
                                            <p className="text-[11px] text-[#94877c] mt-0.5" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>At current pace, deadline will be missed</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 px-3 py-2.5 rounded-lg bg-[#fcf6ef] border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                                        <div>
                                            <p className="text-[13px] text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>Feature launch deadline at risk</p>
                                            <p className="text-[11px] text-[#94877c] mt-0.5" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Dependencies unresolved, scope creeping</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - The cost */}
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h2
                            className="text-2xl sm:text-3xl md:text-[36px] text-[#000] mb-6 sm:mb-8"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontWeight: 400,
                                letterSpacing: '-0.03em',
                                lineHeight: '1.1',
                            }}
                        >
                            What it's costing you
                        </h2>

                        {/* Stat 1 */}
                        <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5 border-b border-[#e5e0d8]">
                            <span
                                className="text-3xl sm:text-4xl md:text-5xl text-[#000] shrink-0 w-20 sm:w-24"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                $150K
                            </span>
                            <div>
                                <p
                                    className="text-base sm:text-lg text-[#000]"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    to replace one engineer
                                </p>
                                <p
                                    className="text-sm text-[#94877c] mt-1"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Burnout is preventable. Turnover isn't cheap.
                                </p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5 border-b border-[#e5e0d8]">
                            <span
                                className="text-3xl sm:text-4xl md:text-5xl text-[#000] shrink-0 w-20 sm:w-24"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                23%
                            </span>
                            <div>
                                <p
                                    className="text-base sm:text-lg text-[#000]"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    of sprints miss their deadline
                                </p>
                                <p
                                    className="text-sm text-[#94877c] mt-1"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Late launches = late revenue.
                                </p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5">
                            <span
                                className="text-3xl sm:text-4xl md:text-5xl text-[#000] shrink-0 w-20 sm:w-24"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                8hrs
                            </span>
                            <div>
                                <p
                                    className="text-base sm:text-lg text-[#000]"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    per manager, per week
                                </p>
                                <p
                                    className="text-sm text-[#94877c] mt-1"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Wasted chasing updates across tools.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
