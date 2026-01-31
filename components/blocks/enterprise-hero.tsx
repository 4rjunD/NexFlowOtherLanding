"use client"

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        }
    },
}

const slideDownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    },
}

const videoVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 }
    },
}

const floatingLogos = [
    // Left side logos
    {
        name: 'Slack',
        icon: '/logos/slack.svg',
        color: '#E01E5A',
        position: 'left-[2%] top-[25%]',
        delay: 0.2,
        duration: 4,
    },
    {
        name: 'Notion',
        icon: '/logos/notion.svg',
        color: '#000000',
        position: 'left-[8%] top-[55%]',
        delay: 0.5,
        duration: 4.5,
    },
    {
        name: 'Linear',
        icon: '/logos/linear.svg',
        color: '#5E6AD2',
        position: 'left-[3%] top-[75%]',
        delay: 0.8,
        duration: 3.8,
    },
    // Right side logos
    {
        name: 'GitHub',
        icon: '/logos/github.svg',
        color: '#24292F',
        position: 'right-[2%] top-[25%]',
        delay: 0.3,
        duration: 4.2,
    },
    {
        name: 'Google Calendar',
        icon: '/logos/gcal.svg',
        color: '#4285F4',
        position: 'right-[7%] top-[50%]',
        delay: 0.6,
        duration: 3.5,
    },
    {
        name: 'Figma',
        icon: '/logos/figma.svg',
        color: '#F24E1E',
        position: 'right-[4%] top-[75%]',
        delay: 0.9,
        duration: 4.8,
    },
]

function FloatingLogo({ name, icon, color, position, delay, duration }: {
    name: string
    icon: string
    color: string
    position: string
    delay: number
    duration: number
}) {
    return (
        <motion.div
            className={`absolute ${position} hidden lg:block z-20`}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
            }}
            transition={{
                duration: 0.6,
                delay: delay + 0.8,
                ease: [0.25, 0.4, 0.25, 1]
            }}
        >
            <motion.div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                style={{
                    boxShadow: `0 8px 32px -4px ${color}25, 0 4px 16px -2px rgba(0,0,0,0.08)`,
                }}
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={icon}
                    alt={name}
                    className="w-8 h-8 md:w-9 md:h-9"
                />
            </motion.div>
        </motion.div>
    )
}

export function EnterpriseHero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(!isMuted)
        }
    }

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

            {/* Floating Integration Logos */}
            {floatingLogos.map((logo) => (
                <FloatingLogo key={logo.name} {...logo} />
            ))}

            <section className="relative z-10">
                {/* Hero Section - compact spacing */}
                <div style={{ padding: '120px 64px 32px' }} className="px-6 md:px-16">
                    <div className="mx-auto max-w-[1200px]">
                        <motion.div
                            className="flex flex-col items-center text-center"
                            style={{ gap: '24px' }}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* Badge - "Backed by Character Capital" */}
                            <motion.div
                                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e5e0d8]"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.6)',
                                }}
                                variants={slideDownVariants}
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
                            </motion.div>

                            {/* Main Headline - Halant style */}
                            <motion.h1
                                className="max-w-[900px] mx-auto text-[#000]"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontSize: 'clamp(32px, 6vw, 72px)',
                                    fontWeight: 400,
                                    letterSpacing: '-0.05em',
                                    lineHeight: '110%',
                                }}
                                variants={slideDownVariants}
                            >
                                The Command Center
                                <br />
                                <span style={{ fontStyle: 'italic' }}>for Your Entire Operation</span>
                            </motion.h1>

                            {/* Subtitle - Inter */}
                            <motion.p
                                className="max-w-[700px] mx-auto text-[#94877c]"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '1.6',
                                }}
                                variants={slideDownVariants}
                            >
                                Connects to your entire workflow. One AI watching it all.
                            </motion.p>

                            {/* CTA Button - Dark green */}
                            <motion.div variants={slideDownVariants}>
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 text-[#fcf6ef] bg-[#1F4D3A] hover:bg-[#163D2E] transition-all duration-300 rounded-full"
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Request a Demo
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Video Section */}
                <motion.div
                    className="relative px-6 md:px-16"
                    style={{ paddingTop: '40px', paddingBottom: '48px' }}
                    variants={videoVariants}
                    initial="hidden"
                    animate="visible"
                >
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
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5 text-white" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
