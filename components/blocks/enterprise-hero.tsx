"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function EnterpriseHero() {
    return (
        <main className="overflow-hidden bg-[#F6F4EF]">
            <section className="pb-24">
                <div className="relative pt-32 md:pt-40">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="#contact"
                                    className="hover:bg-[#EBE8E1] bg-[#EBE8E1] group mx-auto flex w-fit items-center gap-4 rounded-full border border-[#E5E2DB] p-1 pl-4 shadow-sm transition-all duration-300">
                                    <span className="text-[#6B6B6B] text-sm">5 spots left this quarter</span>
                                    <span className="block h-4 w-0.5 border-l border-[#D9D6CF]"></span>

                                    <div className="bg-white group-hover:bg-[#F6F4EF] size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3 text-[#1F4D3A]" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3 text-[#1F4D3A]" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-medium tracking-tight text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                                    Predict burnout 3 weeks before it happens.
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-[#6B6B6B]" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                                    AI that learns each employee&apos;s patterns and tells managers exactly how to help. $50K+ saved per prevented departure. 30% fewer sick days.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-6 text-base bg-[#1F4D3A] hover:bg-[#163D2E] text-white">
                                    <Link href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank">
                                        <span className="text-nowrap">Book a Free Strategy Call</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-xl px-6 text-base border-[#D9D6CF] text-[#111111] hover:bg-[#EBE8E1]">
                                    <Link href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry">
                                        <span className="text-nowrap">Contact Sales</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                            <p className="mt-8 text-sm text-[#6B6B6B]">
                                No results in 90 days? <span className="text-[#1F4D3A] font-medium">Full refund.</span>
                            </p>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative mt-12 overflow-hidden px-6">
                            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#E5E2DB] p-4 shadow-xl bg-white">
                                <WorkforceDashboard />
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </main>
    )
}

function WorkforceDashboard() {
    const employees = [
        { name: "Sarah Mitchell", status: "low", burnoutRisk: 12, trend: "stable", lastCheckin: "2 days ago", action: null },
        { name: "James Kim", status: "low", burnoutRisk: 18, trend: "improving", lastCheckin: "1 day ago", action: null },
        { name: "Emily Roberts", status: "medium", burnoutRisk: 45, trend: "declining", lastCheckin: "3 days ago", action: "Review workload" },
        { name: "Michael Torres", status: "high", burnoutRisk: 78, trend: "declining", lastCheckin: "Today", action: "Manager check-in needed" },
        { name: "Lisa Park", status: "low", burnoutRisk: 22, trend: "stable", lastCheckin: "1 day ago", action: null },
        { name: "David Wright", status: "medium", burnoutRisk: 38, trend: "improving", lastCheckin: "2 days ago", action: null },
    ]

    const statusColors = {
        low: "bg-[#1F4D3A]",
        medium: "bg-[#E5A53D]",
        high: "bg-[#C45C5C]",
    }

    const statusBg = {
        low: "bg-[#1F4D3A]/10 text-[#1F4D3A] border border-[#1F4D3A]/20",
        medium: "bg-[#E5A53D]/10 text-[#E5A53D] border border-[#E5A53D]/20",
        high: "bg-[#C45C5C]/10 text-[#C45C5C] border border-[#C45C5C]/20",
    }

    return (
        <div className="bg-[#EBE8E1] text-[#111111] rounded-xl p-8 aspect-[15/8]" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-medium text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>Burnout Risk Dashboard</h3>
                    <p className="text-sm text-[#6B6B6B] mt-1">AI-powered predictions updated in real-time</p>
                </div>
                <div className="flex gap-6 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                        <span className="text-[#6B6B6B]">Low Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E5A53D]"></div>
                        <span className="text-[#6B6B6B]">Medium Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#C45C5C]"></div>
                        <span className="text-[#6B6B6B]">High Risk</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-white rounded-xl p-5 border border-[#E5E2DB]">
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Team Burnout Risk</p>
                    <p className="text-4xl font-light mt-2 text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>24<span className="text-lg text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A] mt-2">-8% from last month</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[#E5E2DB]">
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Employees At Risk</p>
                    <p className="text-4xl font-light mt-2 text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>2<span className="text-lg text-[#999999]">/47</span></p>
                    <p className="text-xs text-[#E5A53D] mt-2">1 new this week</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[#E5E2DB]">
                    <p className="text-xs text-[#999999] uppercase tracking-wider">Check-in Rate</p>
                    <p className="text-4xl font-light mt-2 text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>94<span className="text-lg text-[#999999]">%</span></p>
                    <p className="text-xs text-[#1F4D3A] mt-2">+12% from last month</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E2DB] overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-[#E5E2DB]">
                            <th className="text-left p-4 font-normal text-[#999999] text-xs uppercase tracking-wider">Employee</th>
                            <th className="text-left p-4 font-normal text-[#999999] text-xs uppercase tracking-wider">Risk Level</th>
                            <th className="text-left p-4 font-normal text-[#999999] text-xs uppercase tracking-wider">Burnout Score</th>
                            <th className="text-left p-4 font-normal text-[#999999] text-xs uppercase tracking-wider">Trend</th>
                            <th className="text-left p-4 font-normal text-[#999999] text-xs uppercase tracking-wider">Suggested Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, i) => (
                            <tr key={i} className="border-b border-[#E5E2DB]/50 last:border-0">
                                <td className="p-4 flex items-center gap-3 text-[#111111]">
                                    <div className={`w-2 h-2 rounded-full ${statusColors[emp.status as keyof typeof statusColors]}`}></div>
                                    {emp.name}
                                </td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusBg[emp.status as keyof typeof statusBg]}`}>
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="p-4 text-[#6B6B6B]">{emp.burnoutRisk}%</td>
                                <td className="p-4 text-[#6B6B6B] capitalize">{emp.trend}</td>
                                <td className="p-4 text-[#6B6B6B]">{emp.action || "—"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
