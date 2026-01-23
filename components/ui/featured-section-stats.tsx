"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeaturedSectionStats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto text-left pt-8 pb-32">
      <div className="px-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#111111] mb-16" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
          What you get for $1.{" "}
          <span className="text-[#6B6B6B]">
            The same frameworks used by biohackers, longevity enthusiasts, and quantified-self pioneers. Distilled into actionable steps anyone can follow.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-3xl font-medium text-[#1F4D3A]" style={{ fontFamily: '"New York", Georgia, serif' }}>12</p>
            <p className="text-[#6B6B6B] text-md">Actionable Frameworks</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-[#1F4D3A]" style={{ fontFamily: '"New York", Georgia, serif' }}>30+</p>
            <p className="text-[#6B6B6B] text-md">Metrics Explained</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-[#1F4D3A]" style={{ fontFamily: '"New York", Georgia, serif' }}>5</p>
            <p className="text-[#6B6B6B] text-md">Ready-to-Use Templates</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-[#1F4D3A]" style={{ fontFamily: '"New York", Georgia, serif' }}>8 hrs</p>
            <p className="text-[#6B6B6B] text-md">Of In-Depth Content</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-48 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1F4D3A" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1F4D3A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1F4D3A"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGreen)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </section>
  );
}
