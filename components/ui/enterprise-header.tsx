"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function EnterpriseHeader() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-[#f6f0e9]">
            <div className="mx-auto max-w-[1200px] h-[80px] flex items-center justify-between px-8 md:px-16">
                {/* Logo */}
                <Link href="/enterprise">
                    <span
                        className="text-[20px] font-medium text-[#2b180a]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, serif',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        NexFlow
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-[16px]">
                    <Link
                        href="https://whop.com/nexflow-5714/"
                        target="_blank"
                        className="text-[14px] text-[#1F4D3A] hover:text-[#163D2E] transition-colors px-[16px] py-[8px] font-medium"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Get the Guide
                    </Link>
                    <Link
                        href="https://cal.com/arjun-dixit-0nwkzi/30min"
                        target="_blank"
                        className="inline-flex items-center justify-center px-[16px] py-[8px] text-[14px] font-medium text-[#f6f0e9] bg-[#2b180a] rounded-[8px] hover:bg-[#3d2a1a] transition-colors"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Book a Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="w-5 h-5 text-[#2b180a]" />
                    ) : (
                        <Menu className="w-5 h-5 text-[#2b180a]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#f6f0e9] border-t border-[#e8d3c0] py-[24px] px-[32px]">
                    <div className="flex flex-col gap-[16px]">
                        <Link
                            href="https://whop.com/nexflow-5714/"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="text-[16px] text-[#1F4D3A] py-[8px] font-medium"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Get the Guide
                        </Link>
                        <Link
                            href="https://cal.com/arjun-dixit-0nwkzi/30min"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center justify-center px-[24px] py-[12px] text-[16px] font-medium text-[#f6f0e9] bg-[#2b180a] rounded-[8px]"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export { EnterpriseHeader };
