"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function PlaybookHeader() {
    const navigationItems = [
        {
            title: "Enterprise",
            href: "/enterprise",
            description: "",
        },
        {
            title: "Playbook",
            href: "/playbook",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-[#F6F4EF]">
            <div className="w-full bg-[#1F4D3A] text-white text-center py-2 text-sm font-medium">
                Introductory price: $1. Get instant access before the price increases.
            </div>
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-6">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href}>
                                        <Button variant="ghost">{item.title}</Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold text-2xl tracking-tight font-[family-name:var(--font-geist-sans)]">NexFlow</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button asChild className="bg-[#1F4D3A] hover:bg-[#163D2E] text-white gap-2">
                        <a href="https://whop.com/nexflow-5714/" target="_blank" rel="noopener noreferrer">
                            Get the Guide <MoveRight className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-[116px] border-t border-[#E5E2DB] flex flex-col w-full right-0 bg-[#F6F4EF] shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-lg">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            <Button asChild className="bg-[#1F4D3A] hover:bg-[#163D2E] text-white gap-2">
                                <a href="https://whop.com/nexflow-5714/" target="_blank" rel="noopener noreferrer">
                                    Get the Guide <MoveRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { PlaybookHeader };
