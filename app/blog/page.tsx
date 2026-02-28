import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Engineering Blog — NexFlow',
  description: 'Actionable insights on PR bottlenecks, sprint risk, alert fatigue, and engineering team health. Written for engineering leaders at scaling companies.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Engineering Blog — NexFlow',
    description: 'Actionable insights on PR bottlenecks, sprint risk, alert fatigue, and engineering team health.',
    type: 'website',
    url: 'https://nexflowinc.com/blog',
  },
}

const dmSans = 'var(--font-dm-sans), "DM Sans", -apple-system, sans-serif'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e8e8ee' }}>
        <div style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/enterprise" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/enterprise" style={{ fontFamily: dmSans, fontSize: 14, color: '#666', textDecoration: 'none' }}>Home</Link>
            <Link
              href="https://calendly.com/arjundixit3508/30min"
              target="_blank"
              style={{
                fontFamily: dmSans,
                fontSize: 13,
                fontWeight: 500,
                color: '#fff',
                padding: '8px 20px',
                background: '#1a1a2e',
                borderRadius: 9999,
                textDecoration: 'none',
              }}
            >
              Get Your Free 48-Hour Audit
            </Link>
          </nav>
        </div>
      </header>

      {/* Page header */}
      <section style={{
        padding: '64px 24px 48px',
        maxWidth: 960,
        margin: '0 auto',
      }}>
        <h1 style={{
          fontFamily: dmSans,
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: '#1a1a2e',
          letterSpacing: '-0.03em',
          marginBottom: 12,
        }}>
          Engineering Blog
        </h1>
        <p style={{
          fontFamily: dmSans,
          fontSize: 17,
          color: '#666',
          lineHeight: 1.6,
          maxWidth: 540,
        }}>
          Insights for engineering leaders who want visibility without surveillance.
        </p>
      </section>

      {/* Article grid */}
      <section style={{
        padding: '0 24px 96px',
        maxWidth: 960,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
          gap: 24,
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article
                className="nf-blog-card"
                style={{
                  border: '1px solid #e8e8ee',
                  borderRadius: 16,
                  padding: '28px 24px',
                  background: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Category + reading time */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: dmSans,
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#10b981',
                    background: '#ecfdf5',
                    padding: '3px 10px',
                    borderRadius: 100,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontFamily: dmSans, fontSize: 12, color: '#999' }}>
                    {post.readingTime} read
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: dmSans,
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1a1a2e',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  marginBottom: 10,
                }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  fontFamily: dmSans,
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.6,
                  marginBottom: 16,
                  flex: 1,
                }}>
                  {post.excerpt.length > 150 ? post.excerpt.slice(0, 150) + '...' : post.excerpt}
                </p>

                {/* Date */}
                <span style={{
                  fontFamily: dmSans,
                  fontSize: 12,
                  color: '#bbb',
                }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#f9f8f6',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        padding: 24,
      }}>
        <div style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 18, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/blog" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Blog</Link>
            <Link href="/privacy" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Terms</Link>
            <Link href="mailto:arjundixit@nexflowinc.com" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Contact</Link>
          </div>
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>&copy; 2026 NexFlow Inc.</span>
        </div>
      </footer>
    </main>
  )
}
