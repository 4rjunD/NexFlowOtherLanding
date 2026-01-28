"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function EnterpriseHeader() {
    const [isOpen, setOpen] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleGetStarted = () => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-[#fcf6ef]">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16">
                <div className="flex items-center justify-between h-[80px]">
                    {/* Logo - Halant style like perfectly.so */}
                    <Link href="/" className="flex items-center">
                        <span
                            className="text-[#000]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                fontSize: '24px',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            NexFlow
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={handleGetStarted}
                            className="px-4 py-2 text-[#000] hover:text-[#1F4D3A] transition-colors rounded-full border border-[#e5e0d8] bg-white/50 hover:bg-white/80"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                        >
                            {showComingSoon ? "Coming Soon!" : "Get Started"}
                        </button>
                        <Link
                            href="https://cal.com/arjun-dixit-0nwkzi/30min"
                            target="_blank"
                            className="px-5 py-2 text-[#fcf6ef] bg-[#1F4D3A] hover:bg-[#163D2E] transition-colors rounded-full"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                        >
                            Book a Meeting
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center text-[#000]"
                        onClick={() => setOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#fcf6ef] border-t border-[#e5e0d8] py-6 px-6 flex flex-col gap-4">
                        <button
                            onClick={handleGetStarted}
                            className="px-5 py-3 text-[#000] text-center rounded-full border border-[#e5e0d8] bg-white/50"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                        >
                            {showComingSoon ? "Coming Soon!" : "Get Started"}
                        </button>
                        <Link
                            href="https://cal.com/arjun-dixit-0nwkzi/30min"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="px-6 py-3 text-[#fcf6ef] bg-[#1F4D3A] text-center rounded-full"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                        >
                            Book a Meeting
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export { EnterpriseHeader };
