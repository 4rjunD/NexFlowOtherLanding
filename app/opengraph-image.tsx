import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NexFlow - Engineering Intelligence Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#fff',
          padding: '80px 80px',
          position: 'relative',
        }}
      >
        {/* Subtle background accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 400,
            height: '100%',
            background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5, #f8fafc)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#10b981',
              marginBottom: 24,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            NexFlow
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#1a1a2e',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              maxWidth: 700,
              marginBottom: 24,
              display: 'flex',
            }}
          >
            Engineering Intelligence for Scaling Teams
          </div>

          <div
            style={{
              fontSize: 22,
              color: '#64748b',
              lineHeight: 1.5,
              maxWidth: 600,
              marginBottom: 40,
              display: 'flex',
            }}
          >
            Surface sprint risks, PR bottlenecks, and team capacity signals before they become problems.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                background: '#1a1a2e',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: 100,
                fontSize: 18,
                fontWeight: 500,
                display: 'flex',
              }}
            >
              Get Free Audit
            </div>
            <div
              style={{
                fontSize: 16,
                color: '#94a3b8',
                display: 'flex',
              }}
            >
              nexflowinc.com
            </div>
          </div>
        </div>

        {/* Report card mock on right side */}
        <div
          style={{
            position: 'absolute',
            right: 60,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 320,
            background: '#fff',
            borderRadius: 16,
            padding: '24px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            border: '1px solid #e8e8ee',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 12, color: '#999', marginBottom: 4, display: 'flex' }}>
            Weekly Engineering Health Report
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e', marginBottom: 16, display: 'flex' }}>
            Team Status: 3 Risks Found
          </div>

          {/* Risk items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#fef2f2', borderRadius: 8, borderLeft: '3px solid #ef4444' }}>
              <div style={{ fontSize: 12, color: '#1a1a2e', display: 'flex' }}>Auth PR blocked 4 days</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#fffbeb', borderRadius: 8, borderLeft: '3px solid #f59e0b' }}>
              <div style={{ fontSize: 12, color: '#1a1a2e', display: 'flex' }}>Sprint velocity down 23%</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#fef2f2', borderRadius: 8, borderLeft: '3px solid #ef4444' }}>
              <div style={{ fontSize: 12, color: '#1a1a2e', display: 'flex' }}>2 engineers at burnout risk</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
