"use client"

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play()
                    } else {
                        video.pause()
                    }
                })
            },
            { threshold: 0.9 }
        )

        observer.observe(video)

        return () => observer.disconnect()
    }, [])

    return (
        <section className="bg-[#f6f0e9] pb-24 md:pb-32">
            <div className="mx-auto max-w-[1000px] px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full overflow-hidden rounded-2xl border border-[#e8d3c0] shadow-lg"
                >
                    <video
                        ref={videoRef}
                        className="w-full h-auto"
                        loop
                        muted
                        playsInline
                        controls
                        preload="auto"
                    >
                        <source src="/demonexflow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    )
}
