'use client'

export function EnterpriseFeatures() {
    return (
        <section className="py-16 md:py-32 bg-[#fcf6ef]">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <p
                                className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                Built for Growth
                            </p>
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl text-[#000]"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontWeight: 400,
                                    letterSpacing: '-0.03em',
                                    lineHeight: '1.1',
                                }}
                            >
                                Works for teams{' '}
                                <span style={{ fontStyle: 'italic' }}>of any size</span>
                            </h2>
                            <p
                                className="mt-6 text-[#94877c] text-lg"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                Whether you run a small agency, a growing company, or a large organization, NexFlow adapts to how you operate.
                            </p>
                        </div>
                        <ul
                            className="mt-8 divide-y divide-[#e5e0d8] border-y border-[#e5e0d8] *:py-4"
                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                        >
                            <li className="text-[#000]">
                                Connect 5 tools or 50. Same simplicity.
                            </li>
                            <li className="text-[#000]">
                                ROI visible within 30 days
                            </li>
                            <li className="text-[#000]">
                                Deploy in days, not months
                            </li>
                            <li className="text-[#000]">
                                No engineering lift required
                            </li>
                        </ul>
                    </div>
                    <div className="border border-[#e5e0d8] relative rounded-3xl p-3 lg:col-span-3 bg-white shadow-sm">
                        <div className="relative rounded-2xl overflow-hidden">
                            {/* Dashboard Mockup */}
                            <div className="bg-[#f5f5f7] p-6 rounded-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p
                                            className="text-xs text-[#94877c] uppercase tracking-wider"
                                            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                        >
                                            Command Center
                                        </p>
                                        <p
                                            className="text-lg text-[#000]"
                                            style={{
                                                fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Your Organization
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A] animate-pulse"></div>
                                        <span className="text-xs text-[#1F4D3A]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Live</span>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-white rounded-xl p-4 border border-[#e5e0d8]">
                                        <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Team members</p>
                                        <p className="text-2xl text-[#000]" style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}>34</p>
                                        <p className="text-xs text-[#1F4D3A]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>All tracked</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-[#e5e0d8]">
                                        <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Issues flagged</p>
                                        <p className="text-2xl text-[#000]" style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}>7</p>
                                        <p className="text-xs text-amber-600" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>3 need review</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-[#e5e0d8]">
                                        <p className="text-xs text-[#94877c]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Tasks overdue</p>
                                        <p className="text-2xl text-[#000]" style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}>4</p>
                                        <p className="text-xs text-red-500" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Escalated</p>
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="bg-white rounded-xl p-4 border border-[#e5e0d8]">
                                    <p className="text-xs text-[#94877c] mb-3" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Recent signals</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Sent wrong file to client</p>
                                            <span className="text-xs text-[#94877c] ml-auto">Jake M.</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Response rate dropped 40%</p>
                                            <span className="text-xs text-[#94877c] ml-auto">Sarah K.</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Skipped approval workflow</p>
                                            <span className="text-xs text-[#94877c] ml-auto">Operations</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Exceeded quarterly targets</p>
                                            <span className="text-xs text-[#94877c] ml-auto">Anna L.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
