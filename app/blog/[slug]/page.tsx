import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, RELATED_ARTICLES } from '@/lib/blog'
import type { Metadata } from 'next'

const dmSans = 'var(--font-dm-sans), "DM Sans", -apple-system, sans-serif'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const description = post.excerpt.slice(0, 155)

  return {
    title: `${post.title} | NexFlow Blog`,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: `https://nexflowinc.com/blog/${slug}`,
      publishedTime: post.date,
      authors: ['NexFlow Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  }
}

// MDX components for rendering
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} style={{
      fontFamily: dmSans,
      fontSize: 24,
      fontWeight: 700,
      color: '#1a1a2e',
      letterSpacing: '-0.02em',
      marginTop: 40,
      marginBottom: 16,
      lineHeight: 1.3,
    }} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} style={{
      fontFamily: dmSans,
      fontSize: 20,
      fontWeight: 600,
      color: '#1a1a2e',
      marginTop: 32,
      marginBottom: 12,
      lineHeight: 1.3,
    }} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} style={{
      fontFamily: dmSans,
      fontSize: 17,
      color: '#444',
      lineHeight: 1.75,
      marginBottom: 20,
    }} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} style={{
      fontFamily: dmSans,
      fontSize: 17,
      color: '#444',
      lineHeight: 1.75,
      marginBottom: 20,
      paddingLeft: 24,
    }} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} style={{
      fontFamily: dmSans,
      fontSize: 17,
      color: '#444',
      lineHeight: 1.75,
      marginBottom: 20,
      paddingLeft: 24,
    }} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} style={{
      marginBottom: 8,
    }} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} style={{ fontWeight: 600, color: '#1a1a2e' }} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} style={{
      borderLeft: '3px solid #10b981',
      paddingLeft: 20,
      margin: '24px 0',
      fontFamily: dmSans,
      fontSize: 17,
      color: '#555',
      fontStyle: 'italic',
      lineHeight: 1.7,
    }} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} style={{
      color: '#10b981',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
    }} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} style={{
      fontFamily: 'var(--font-geist-mono), monospace',
      fontSize: 15,
      background: '#f4f4f8',
      padding: '2px 6px',
      borderRadius: 4,
      color: '#1a1a2e',
    }} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} style={{
      fontFamily: 'var(--font-geist-mono), monospace',
      fontSize: 14,
      background: '#1a1a2e',
      color: '#e2e8f0',
      padding: '20px 24px',
      borderRadius: 12,
      overflow: 'auto',
      marginBottom: 24,
      lineHeight: 1.6,
    }} />
  ),
  hr: () => (
    <hr style={{
      border: 'none',
      height: 1,
      background: '#e8e8ee',
      margin: '36px 0',
    }} />
  ),
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const relatedSlugs = RELATED_ARTICLES[slug] || []
  const relatedPosts = relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "NexFlow"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexFlow",
      "url": "https://nexflowinc.com"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": `https://nexflowinc.com/blog/${slug}`
  }

  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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
            <Link href="/blog" style={{ fontFamily: dmSans, fontSize: 14, color: '#666', textDecoration: 'none' }}>Blog</Link>
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

      {/* Article */}
      <article style={{
        maxWidth: 680,
        margin: '0 auto',
        padding: '56px 24px 64px',
      }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
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
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#bbb' }}>·</span>
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>{post.readingTime} read</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: dmSans,
          fontSize: 'clamp(28px, 5vw, 36px)',
          fontWeight: 700,
          color: '#1a1a2e',
          lineHeight: 1.2,
          letterSpacing: '-0.03em',
          marginBottom: 12,
        }}>
          {post.title}
        </h1>

        <p style={{
          fontFamily: dmSans,
          fontSize: 14,
          color: '#999',
          marginBottom: 40,
        }}>
          By NexFlow Team
        </p>

        <div style={{ height: 1, background: '#e8e8ee', marginBottom: 40 }} />

        {/* MDX content */}
        <MDXRemote source={post.content} components={mdxComponents} />

        {/* CTA block */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: 16,
          padding: '32px 28px',
          marginTop: 48,
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: dmSans,
            fontSize: 22,
            fontWeight: 700,
            color: '#1a1a2e',
            marginBottom: 12,
            lineHeight: 1.3,
          }}>
            Your next missed deadline is already forming.
          </h3>
          <p style={{
            fontFamily: dmSans,
            fontSize: 15,
            color: '#666',
            lineHeight: 1.6,
            marginBottom: 24,
            maxWidth: 480,
            margin: '0 auto 24px',
          }}>
            We&apos;ll audit 90 days of your GitHub, Jira, and Slack data and deliver a one-page risk report in 48 hours — showing exactly which teams and repos are most likely to miss their next deadline. Free.
          </p>
          <Link
            href="https://calendly.com/arjundixit3508/30min"
            target="_blank"
            style={{
              fontFamily: dmSans,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#10b981',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Get Your Free 48-Hour Audit
          </Link>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <h3 style={{
              fontFamily: dmSans,
              fontSize: 18,
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: 20,
            }}>
              Related Articles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {relatedPosts.map((related) => related && (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  style={{
                    display: 'block',
                    padding: '16px 20px',
                    border: '1px solid #e8e8ee',
                    borderRadius: 12,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <span style={{
                    fontFamily: dmSans,
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#10b981',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {related.category}
                  </span>
                  <h4 style={{
                    fontFamily: dmSans,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#1a1a2e',
                    marginTop: 4,
                    lineHeight: 1.3,
                  }}>
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

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
