"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function Features() {
    return (
        <section className="bg-[#fcf6ef] pt-8 pb-16 md:pt-16 md:pb-32">
            <div className="mx-auto max-w-5xl px-6">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <p
                        className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}
                    >
                        Connected Intelligence
                    </p>
                    <h2
                        className="text-3xl md:text-[42px] text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2',
                        }}
                    >
                        Lives inside your <span style={{ fontStyle: 'italic' }}>entire stack</span>
                    </h2>
                </div>
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden border-[#e5e0d8] bg-white shadow-sm sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p
                                    className="text-[#000]"
                                    style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                                >
                                    Real-time Pattern Detection
                                </p>
                                <p
                                    className="text-[#94877c] mt-3 max-w-sm text-sm"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    Unlike static dashboards, NexFlow continuously monitors patterns across all systems, detects anomalies, and surfaces correlations humans would miss.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,#fcf6ef_100%)]"></div>

                            <div className="bg-[#f6f0e9] overflow-hidden rounded-tl-lg border-l border-t border-[#e5e0d8] pl-2 pt-2">
                                <div className="bg-white rounded-tl-lg p-4 space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-[#fcf6ef] rounded-lg border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                        <span className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                            Anomaly: PR merge rate dropped 40%
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-[#fcf6ef] rounded-lg border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                        <span className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                            Correlation: Slack activity up 2x
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-[#fcf6ef] rounded-lg border border-[#e5e0d8]">
                                        <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                                        <span className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                            Action: Scope adjustment suggested
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden border-[#e5e0d8] bg-white shadow-sm sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <p
                            className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg sm:text-2xl md:p-6 text-[#000]"
                            style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                        >
                            Autonomous actions. Beyond alerting.
                        </p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,#fcf6ef_100%)]"></div>
                                <div className="overflow-hidden rounded-r-lg border border-[#e5e0d8] bg-[#1F4D3A] p-4">
                                    <div className="space-y-2 text-sm text-white/90" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50">→</span> Reassign stuck tasks automatically
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50">→</span> Flag overloaded team members
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50">→</span> Alert when deadlines are at risk
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50">→</span> Trigger workflows when patterns break
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group p-6 border-[#e5e0d8] bg-white shadow-sm sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <p
                            className="mx-auto mb-12 max-w-md text-balance text-center text-lg sm:text-2xl text-[#000]"
                            style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                        >
                            One hotkey away. Always watching.
                        </p>

                        <div className="flex justify-center gap-6">
                            <div className="bg-[#f6f0e9] relative flex aspect-square size-16 items-center rounded-[7px] border border-[#e5e0d8] p-3 shadow-sm">
                                <span className="absolute right-2 top-1 block text-sm text-[#94877c]">fn</span>
                                <svg className="mt-auto size-4 text-[#1F4D3A]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                            </div>
                            <div className="bg-[#f6f0e9] flex aspect-square size-16 items-center justify-center rounded-[7px] border border-[#e5e0d8] p-3 shadow-sm">
                                <span className="text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500 }}>K</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="group relative border-[#e5e0d8] bg-white shadow-sm sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <p
                                className="text-[#000]"
                                style={{ fontFamily: 'var(--font-halant), Halant, serif', fontWeight: 500 }}
                            >
                                50+ Integrations
                            </p>
                            <p
                                className="text-[#94877c] mt-2 max-w-sm text-sm"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                Communication. Engineering. Marketing. Automation. Wearables.
                            </p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                {/* Slack */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.528 2.528 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.527 2.527 0 0 1-2.522 2.522h-6.314z" fill="#E01E5A"/>
                                    </svg>
                                </div>
                                {/* GitHub */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#000">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </div>
                                {/* Notion */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#000">
                                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.64 1.782l13.168-.933c1.636-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V3.65c0-.839.374-1.54 1.589-1.868z"/>
                                    </svg>
                                </div>
                                {/* Linear */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#5E6AD2">
                                        <path d="M1.04 11.18c.252-.164.493-.339.723-.524l11.582 11.582c-.185.23-.36.471-.524.722L1.04 11.18zm-.522 2.642c.095-.239.2-.472.314-.7l10.046 10.046c-.228.114-.461.22-.7.314L.518 13.822zM2.06 9.04c.162-.17.332-.333.508-.49l12.882 12.882c-.157.176-.32.346-.49.508L2.06 9.04zM14.78.518c.239.095.472.2.7.314L5.434 10.878c-.114-.228-.22-.461-.314-.7L14.78.518zm-1.82.522c.164.252.339.493.524.723L1.903 13.345c-.23-.185-.471-.36-.722-.524L12.96 1.04zm1.1 2.02c.17.162.333.332.49.508L1.668 16.45c-.176-.157-.346-.32-.508-.49L14.06 3.06zM24 12c0 6.627-5.373 12-12 12-.674 0-1.335-.056-1.981-.164L21.836 12.02c.108.646.164 1.307.164 1.981zm-.042-2.544L11.456.042A12.063 12.063 0 0 1 12 0c6.627 0 12 5.373 12 12 0 .181-.014.36-.042.544-.544-.028-1.095-.042-1.652-.042-.557 0-1.108.014-1.652.042A9.935 9.935 0 0 0 12 2c-.181 0-.36.014-.544.042-.028.544-.042 1.095-.042 1.652 0 .557.014 1.108.042 1.652A9.935 9.935 0 0 0 2 12c0 .181.014.36.042.544.544.028 1.095.042 1.652.042.557 0 1.108-.014 1.652-.042A9.935 9.935 0 0 0 12 22c.181 0 .36-.014.544-.042.028-.544.042-1.095.042-1.652 0-.557-.014-1.108-.042-1.652A9.935 9.935 0 0 0 22 12c0-.181-.014-.36-.042-.544z"/>
                                    </svg>
                                </div>
                                {/* Google */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                </div>
                                {/* Meta */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#0081FB">
                                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                                    </svg>
                                </div>
                                {/* HubSpot */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#FF7A59">
                                        <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.198 2.198 0 0 0 17.233.836h-.066a2.198 2.198 0 0 0-2.198 2.198v.066c0 .864.501 1.61 1.227 1.967v2.862a5.052 5.052 0 0 0-2.331 1.108l-6.156-4.749a2.065 2.065 0 0 0 .09-.592 2.088 2.088 0 1 0-2.088 2.088c.401 0 .77-.118 1.084-.315l6.044 4.663a5.058 5.058 0 0 0-.405 1.974c0 .724.156 1.41.428 2.036l-2.879 2.879a1.94 1.94 0 0 0-.58-.095 1.985 1.985 0 1 0 1.985 1.985c0-.203-.034-.398-.09-.583l2.896-2.896a5.054 5.054 0 1 0 3.924-8.502zm-.97 7.158a2.158 2.158 0 1 1 0-4.316 2.158 2.158 0 0 1 0 4.316z"/>
                                    </svg>
                                </div>
                                {/* Jira */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#0052CC">
                                        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23 0H11.457a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23 0z"/>
                                    </svg>
                                </div>
                                {/* Zapier */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#FF4A00">
                                        <path d="M15.088 12l2.85-2.85a1.5 1.5 0 0 0 0-2.122l-2.85-2.85h4.037a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 0 0-1.5-1.5h-1.178a1.5 1.5 0 0 0-1.5 1.5v4.037l-2.85-2.85a1.5 1.5 0 0 0-2.122 0l-2.85 2.85V1.5a1.5 1.5 0 0 0-1.5-1.5H5.947a1.5 1.5 0 0 0-1.5 1.5v1.178a1.5 1.5 0 0 0 1.5 1.5h4.037l-2.85 2.85a1.5 1.5 0 0 0 0 2.122l2.85 2.85H5.947a1.5 1.5 0 0 0-1.5 1.5v1.178a1.5 1.5 0 0 0 1.5 1.5h1.178a1.5 1.5 0 0 0 1.5-1.5v-4.037l2.85 2.85a1.5 1.5 0 0 0 2.122 0l2.85-2.85v4.037a1.5 1.5 0 0 0 1.5 1.5h1.178a1.5 1.5 0 0 0 1.5-1.5V13.5a1.5 1.5 0 0 0-1.5-1.5h-4.037zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                </div>
                                {/* Calendar */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#1F4D3A">
                                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                                    </svg>
                                </div>
                                {/* Oura Ring */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#1F4D3A">
                                        <circle cx="12" cy="12" r="10" fill="none" stroke="#1F4D3A" strokeWidth="2"/>
                                        <circle cx="12" cy="12" r="6" fill="none" stroke="#1F4D3A" strokeWidth="2"/>
                                    </svg>
                                </div>
                                {/* Email */}
                                <div className="rounded-lg bg-[#f6f0e9] flex aspect-square items-center justify-center border border-[#e5e0d8] p-3">
                                    <svg className="size-6" viewBox="0 0 24 24" fill="#1F4D3A">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
