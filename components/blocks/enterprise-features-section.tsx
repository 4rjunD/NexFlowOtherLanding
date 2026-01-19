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
        <section className="relative py-24 md:py-32 bg-[#EBE8E1] overflow-hidden">
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
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
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2 className="text-[#111111] text-3xl md:text-[40px] font-medium leading-tight md:leading-[53px]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                                Know who's struggling before they quit.
                            </h2>
                        </div>

                        <p className="text-[#6B6B6B] text-sm md:text-[15px] leading-6 mt-2">
                            AI learns each person's patterns. When something changes, you know 3 weeks before they burn out.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#1F4D3A]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">2-min weekly check-ins</p>
                                    <p className="text-[#6B6B6B] text-sm">94% completion rate.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">Wearable sync</p>
                                    <p className="text-[#6B6B6B] text-sm">Apple Watch, Oura, Whoop, Fitbit.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#E5A53D]/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#E5A53D]"></div>
                                </div>
                                <div>
                                    <p className="text-[#111111] font-medium">Risk scores</p>
                                    <p className="text-[#6B6B6B] text-sm">Burnout, disengagement, departure risk.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        className="relative mt-10 md:mt-0 mx-auto w-full"
                        variants={itemVariants}
                    >
                        <div className="relative w-full bg-white rounded-2xl border border-[#E5E2DB] p-6 shadow-lg">
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
        { week: "W1", burnout: 32, engagement: 75, wellness: 78 },
        { week: "W2", burnout: 28, engagement: 78, wellness: 80 },
        { week: "W3", burnout: 35, engagement: 72, wellness: 74 },
        { week: "W4", burnout: 24, engagement: 82, wellness: 85 },
        { week: "W5", burnout: 22, engagement: 85, wellness: 87 },
        { week: "W6", burnout: 18, engagement: 88, wellness: 90 },
    ];

    return (
        <div className="space-y-6" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>Risk Trends (6 weeks)</h3>
                    <p className="text-xs text-[#999999]">Lower burnout risk is better</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#C45C5C]"></div>
                        <span className="text-[#6B6B6B]">Burnout Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                        <span className="text-[#6B6B6B]">Engagement</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-48 flex items-end justify-between gap-2 bg-[#F6F4EF] rounded-xl p-4">
                {weeklyData.map((week, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex gap-1 items-end justify-center h-36">
                            <div
                                className="w-3 bg-[#C45C5C] rounded-t"
                                style={{ height: `${week.burnout}%` }}
                            ></div>
                            <div
                                className="w-3 bg-[#1F4D3A] rounded-t"
                                style={{ height: `${week.engagement}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-[#999999]">{week.week}</span>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E2DB]">
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Burnout Risk</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>18<span className="text-sm text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A]">-14% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Engagement</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>88<span className="text-sm text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A]">+13% vs 6 weeks ago</p>
                </div>
                <div>
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Departures Prevented</p>
                    <p className="text-2xl font-light text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>3</p>
                    <p className="text-xs text-[#1F4D3A]">$150K+ saved</p>
                </div>
            </div>
        </div>
    );
}
