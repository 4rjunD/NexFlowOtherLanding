'use client';

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    },
};

const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function EnterpriseFeaturesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-[#f6f0e9] overflow-hidden">
            <div className="container max-w-[1200px] w-full px-6 md:px-16 relative z-10 mx-auto">
                <motion.div
                    className="grid grid-cols-1 gap-16 md:gap-12 w-full items-center md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0"
                        variants={leftItemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2
                                className="text-[#000] text-3xl md:text-[42px] leading-tight md:leading-[1.15]"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                    letterSpacing: '-0.05em',
                                }}
                            >
                                See workforce health.{' '}
                                <span style={{ fontStyle: 'italic' }}>In real time</span>.
                            </h2>
                        </div>

                        <p
                            className="text-[#94877c] text-base md:text-[17px] leading-relaxed mt-2"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Stress levels. Recovery patterns. Energy trends. Surfaced before burnout hits.
                        </p>

                        <ul className="mt-6 space-y-5">
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#1F4D3A]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                </div>
                                <div>
                                    <p className="text-[#000] font-medium" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Physiological signals</p>
                                    <p className="text-[#94877c] text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>HRV, sleep quality, recovery scores from wearables.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#1F4D3A]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                </div>
                                <div>
                                    <p className="text-[#000] font-medium" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Burnout prediction</p>
                                    <p className="text-[#94877c] text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Identify risk 3 weeks before breakdown.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#1F4D3A]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                </div>
                                <div>
                                    <p className="text-[#000] font-medium" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Recovery protocols</p>
                                    <p className="text-[#94877c] text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>AI-generated interventions for at-risk employees.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        className="relative mt-10 md:mt-0 mx-auto w-full"
                        variants={rightItemVariants}
                    >
                        <div className="relative w-full bg-white rounded-2xl border border-[#e5e0d8] p-6 shadow-lg">
                            <AnalyticsDashboard />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function AnalyticsDashboard() {
    const weeklyData = [
        { week: "W1", productivity: 72, energy: 75, focus: 68 },
        { week: "W2", productivity: 78, energy: 78, focus: 74 },
        { week: "W3", productivity: 75, energy: 72, focus: 70 },
        { week: "W4", productivity: 82, energy: 82, focus: 78 },
        { week: "W5", productivity: 85, energy: 85, focus: 82 },
        { week: "W6", productivity: 88, energy: 88, focus: 86 },
    ];

    return (
        <div className="space-y-6" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
            <div className="flex items-center justify-between">
                <div>
                    <h3
                        className="text-lg text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 500,
                        }}
                    >
                        Performance Trends (6 weeks)
                    </h3>
                    <p className="text-xs text-[#94877c]">Team-wide metrics</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                        <span className="text-[#94877c]">Productivity</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#5BA88B]"></div>
                        <span className="text-[#94877c]">Energy</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48 flex items-end justify-between gap-2 bg-[#fcf6ef] rounded-xl p-4">
                {weeklyData.map((week, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex gap-1 items-end justify-center h-36">
                            <div
                                className="w-3 bg-[#1F4D3A] rounded-t"
                                style={{ height: `${week.productivity}%` }}
                            ></div>
                            <div
                                className="w-3 bg-[#5BA88B] rounded-t"
                                style={{ height: `${week.energy}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-[#94877c]">{week.week}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e5e0d8]">
                <div>
                    <p className="text-xs text-[#94877c] uppercase tracking-wider">Productivity</p>
                    <p
                        className="text-2xl text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                        }}
                    >
                        88<span className="text-sm text-[#94877c]">%</span>
                    </p>
                    <p className="text-xs text-[#1F4D3A]">+16% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-xs text-[#94877c] uppercase tracking-wider">Energy</p>
                    <p
                        className="text-2xl text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                        }}
                    >
                        88<span className="text-sm text-[#94877c]">%</span>
                    </p>
                    <p className="text-xs text-[#1F4D3A]">+13% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-xs text-[#94877c] uppercase tracking-wider">Output</p>
                    <p
                        className="text-2xl text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                        }}
                    >
                        +22%
                    </p>
                    <p className="text-xs text-[#1F4D3A]">Team efficiency gain</p>
                </div>
            </div>
        </div>
    );
}
