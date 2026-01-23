"use client"

import Link from 'next/link'
import { useRef, useEffect } from 'react'

export function EnterpriseHero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const video = videoRef.current
        const container = videoContainerRef.current
        if (!video || !container) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                        video.play()
                    } else {
                        video.pause()
                    }
                })
            },
            {
                threshold: 0.7,
            }
        )

        observer.observe(container)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <main className="overflow-hidden bg-[#fcf6ef] relative">
            {/* Subtle warm aura effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full opacity-40"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(31, 77, 58, 0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <section className="relative z-10">
                {/* Hero Section - perfectly.so style spacing */}
                <div style={{ padding: '160px 64px 45px' }} className="px-6 md:px-16">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex flex-col items-center text-center" style={{ gap: '42px' }}>

                            {/* Badge - "Backed by Character Capital" */}
                            <div
                                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e5e0d8]"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.6)',
                                }}
                            >
                                <span
                                    className="text-[15px] text-[#000]"
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Backed by Character Capital
                                </span>
                            </div>

                            {/* Main Headline - Halant style */}
                            <h1
                                className="max-w-[900px] mx-auto text-[#000]"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontSize: 'clamp(32px, 6vw, 72px)',
                                    fontWeight: 400,
                                    letterSpacing: '-0.05em',
                                    lineHeight: '110%',
                                }}
                            >
                                The operating system for
                                <br />
                                <span style={{ fontStyle: 'italic' }}>Workforce Health</span>
                            </h1>

                            {/* Subtitle - Inter */}
                            <p
                                className="max-w-[600px] mx-auto text-[#94877c]"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '1.6',
                                }}
                            >
                                AI that learns your team&apos;s patterns, predicts peak performance windows, and catches burnout before it costs you. Data-driven. Human-centered.
                            </p>

                            {/* CTA Button - Dark green */}
                            <Link
                                href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 text-[#fcf6ef] bg-[#1F4D3A] hover:bg-[#163D2E] transition-all duration-300 rounded-full"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                }}
                            >
                                Book a Meeting
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="relative px-6 md:px-16" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
                    <div ref={videoContainerRef} className="mx-auto max-w-[1072px]">
                        <div
                            className="relative overflow-hidden rounded-lg"
                            style={{
                                aspectRatio: '16 / 9',
                                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                playsInline
                                muted
                                loop
                            >
                                <source src="/demonexflow.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
