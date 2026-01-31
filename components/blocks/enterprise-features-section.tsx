'use client';

import React from "react";
import { motion } from "framer-motion";

export function EnterpriseFeaturesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-[#fcf6ef] overflow-hidden">
            <div className="container max-w-[1200px] w-full px-6 md:px-16 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Product Mockup */}
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
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-sm text-[#94877c]"
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            Today, 2:45 PM
                                        </span>
                                        <span className="text-[#94877c]">•</span>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-[#1F4D3A] flex items-center justify-center text-white text-xs">S</div>
                                            <div className="w-6 h-6 rounded-full bg-[#5BA88B] flex items-center justify-center text-white text-xs">M</div>
                                            <div className="w-6 h-6 rounded-full bg-[#94877c] flex items-center justify-center text-white text-xs">+4</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl text-[#000] mb-4"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Q4 Sprint Velocity & Team Health
                                </h3>

                                {/* Tabs */}
                                <div className="flex gap-2 mb-6">
                                    <span className="px-3 py-1.5 text-xs rounded-full bg-[#f5f5f7] text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Overview</span>
                                    <span className="px-3 py-1.5 text-xs rounded-full bg-[#1F4D3A] text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Signals</span>
                                    <span className="px-3 py-1.5 text-xs rounded-full bg-[#f5f5f7] text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Actions</span>
                                </div>

                                {/* Activity Feed */}
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                                        <div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>Slack activity spike</p>
                                            <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Engineering channel up 240% vs. baseline</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A] mt-2 shrink-0"></div>
                                        <div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>PR velocity normal</p>
                                            <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>14 merged this week. On track.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                        <div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>Calendar overload detected</p>
                                            <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>3 team members &gt;6hrs meetings/day</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A] mt-2 shrink-0"></div>
                                        <div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>Ad spend optimized</p>
                                            <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Paused 2 underperforming campaigns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h2
                            className="text-3xl md:text-[42px] text-[#000] mb-12"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontWeight: 400,
                                letterSpacing: '-0.03em',
                                lineHeight: '1.1',
                            }}
                        >
                            The system that never sleeps
                        </h2>

                        {/* Stat 1 */}
                        <div className="flex items-start gap-8 py-6 border-b border-[#e5e0d8]">
                            <span
                                className="text-5xl md:text-6xl text-[#000] shrink-0 w-28"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                12
                            </span>
                            <div>
                                <p
                                    className="text-xl md:text-2xl text-[#000] mb-1"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Trained models
                                </p>
                                <p
                                    className="text-[#94877c]"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Purpose-built AI for ops, engineering, marketing, and team health signals.
                                </p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start gap-8 py-6 border-b border-[#e5e0d8]">
                            <span
                                className="text-5xl md:text-6xl text-[#000] shrink-0 w-28"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                24<span className="text-3xl">/7</span>
                            </span>
                            <div>
                                <p
                                    className="text-xl md:text-2xl text-[#000] mb-1"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Monitoring
                                </p>
                                <p
                                    className="text-[#94877c]"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Patterns detected while you sleep. Anomalies surfaced before morning standup.
                                </p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-start gap-8 py-6">
                            <span
                                className="text-5xl md:text-6xl text-[#000] shrink-0 w-28"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                }}
                            >
                                3<span className="text-3xl">wk</span>
                            </span>
                            <div>
                                <p
                                    className="text-xl md:text-2xl text-[#000] mb-1"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Early warning
                                </p>
                                <p
                                    className="text-[#94877c]"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Predict burnout, churn, and bottlenecks weeks before they surface.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
