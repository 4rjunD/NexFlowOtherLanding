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

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function EnterpriseFeaturesSection() {
    return (
        <section className="relative py-[120px] bg-[#f6f0e9] overflow-hidden">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <motion.div
                    className="grid grid-cols-1 gap-[64px] w-full items-center md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col items-start gap-[16px] max-w-[500px]"
                        variants={itemVariants}
                    >
                        <h2
                            className="text-[32px] md:text-[40px] font-medium text-[#2b180a]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                lineHeight: '110%',
                                letterSpacing: '-0.05em'
                            }}
                        >
                            See who needs help. Before they ask.
                        </h2>

                        <p
                            className="text-[16px] text-[#6b5d52]"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                lineHeight: '1.6'
                            }}
                        >
                            AI learns each person. When patterns shift, you know three weeks early.
                        </p>

                        <ul className="mt-[24px] space-y-[16px]">
                            <li className="flex items-start gap-[12px]">
                                <div className="w-[20px] h-[20px] rounded-full bg-[#2b180a]/10 flex items-center justify-center mt-[2px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#2b180a]"></div>
                                </div>
                                <div>
                                    <p
                                        className="text-[16px] font-medium text-[#2b180a]"
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, serif',
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Weekly check-ins
                                    </p>
                                    <p
                                        className="text-[14px] text-[#6b5d52]"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        Two minutes. 94% completion.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-[12px]">
                                <div className="w-[20px] h-[20px] rounded-full bg-[#2b180a]/10 flex items-center justify-center mt-[2px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#2b180a]"></div>
                                </div>
                                <div>
                                    <p
                                        className="text-[16px] font-medium text-[#2b180a]"
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, serif',
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Wearable sync
                                    </p>
                                    <p
                                        className="text-[14px] text-[#6b5d52]"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        Apple Watch, Oura, Whoop, Fitbit
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-[12px]">
                                <div className="w-[20px] h-[20px] rounded-full bg-[#2b180a]/10 flex items-center justify-center mt-[2px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#2b180a]"></div>
                                </div>
                                <div>
                                    <p
                                        className="text-[16px] font-medium text-[#2b180a]"
                                        style={{
                                            fontFamily: 'var(--font-halant), Halant, serif',
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Risk scores
                                    </p>
                                    <p
                                        className="text-[14px] text-[#6b5d52]"
                                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                    >
                                        Burnout. Disengagement. Departure.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        className="relative w-full"
                        variants={itemVariants}
                    >
                        <div className="relative w-full bg-white rounded-[16px] border border-[#e8d3c0] p-[24px] shadow-sm">
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
        { week: "W1", burnout: 32, engagement: 75 },
        { week: "W2", burnout: 28, engagement: 78 },
        { week: "W3", burnout: 35, engagement: 72 },
        { week: "W4", burnout: 24, engagement: 82 },
        { week: "W5", burnout: 22, engagement: 85 },
        { week: "W6", burnout: 18, engagement: 88 },
    ];

    return (
        <div className="space-y-[24px]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
            <div className="flex items-center justify-between">
                <div>
                    <h3
                        className="text-[18px] text-[#2b180a]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, serif',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        Risk Trends (6 weeks)
                    </h3>
                    <p className="text-[12px] text-[#6b5d52]">Lower burnout risk is better</p>
                </div>
                <div className="flex gap-[16px] text-[12px]">
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#c45c5c]"></div>
                        <span className="text-[#6b5d52]">Burnout</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#2b180a]"></div>
                        <span className="text-[#6b5d52]">Engagement</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[192px] flex items-end justify-between gap-[8px] bg-[#f6f0e9] rounded-[12px] p-[16px]">
                {weeklyData.map((week, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-[4px]">
                        <div className="w-full flex gap-[4px] items-end justify-center h-[144px]">
                            <div
                                className="w-[12px] bg-[#c45c5c] rounded-t-[4px]"
                                style={{ height: `${week.burnout}%` }}
                            ></div>
                            <div
                                className="w-[12px] bg-[#2b180a] rounded-t-[4px]"
                                style={{ height: `${week.engagement}%` }}
                            ></div>
                        </div>
                        <span className="text-[12px] text-[#6b5d52]">{week.week}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-[16px] pt-[16px] border-t border-[#e8d3c0]">
                <div>
                    <p className="text-[11px] text-[#6b5d52] uppercase tracking-wider">Burnout Risk</p>
                    <p
                        className="text-[24px] font-light text-[#2b180a]"
                        style={{ fontFamily: 'var(--font-halant), Halant, serif' }}
                    >
                        18<span className="text-[14px] text-[#6b5d52]">%</span>
                    </p>
                    <p className="text-[12px] text-[#2b180a]">-14% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-[11px] text-[#6b5d52] uppercase tracking-wider">Engagement</p>
                    <p
                        className="text-[24px] font-light text-[#2b180a]"
                        style={{ fontFamily: 'var(--font-halant), Halant, serif' }}
                    >
                        88<span className="text-[14px] text-[#6b5d52]">%</span>
                    </p>
                    <p className="text-[12px] text-[#2b180a]">+13% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-[11px] text-[#6b5d52] uppercase tracking-wider">Prevented</p>
                    <p
                        className="text-[24px] font-light text-[#2b180a]"
                        style={{ fontFamily: 'var(--font-halant), Halant, serif' }}
                    >
                        3
                    </p>
                    <p className="text-[12px] text-[#2b180a]">$150K+ saved</p>
                </div>
            </div>
        </div>
    );
}
