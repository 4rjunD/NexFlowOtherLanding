"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function PlaybookHero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
              The system to finally understand your body.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#6B6B6B] max-w-2xl text-center">
              Stop Googling symptoms. Stop guessing which supplements work. In 30 days, you&apos;ll know exactly how to read your wearable data, run personal experiments, and catch warning signs before your doctor does.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a href="https://whop.com/nexflow-5714/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-4 bg-[#1F4D3A] hover:bg-[#163D2E] text-white">
                Get Instant Access for $1 <MoveRight className="w-4 h-4" />
              </Button>
            </a>
            <p className="text-sm text-[#6B6B6B]">
              Introductory price. <span className="text-[#1F4D3A] font-medium">100% money-back guarantee</span> if you don&apos;t learn something actionable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlaybookHero };
