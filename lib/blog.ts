import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  keywords: string[]
  readingTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)

    return {
      slug: data.slug || slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || '',
      keywords: data.keywords || [],
      readingTime: data.readingTime || `${Math.ceil(stats.minutes)} min`,
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const postSlug = data.slug || filename.replace(/\.mdx$/, '')

    if (postSlug === slug) {
      const stats = readingTime(content)
      return {
        slug: postSlug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        category: data.category || '',
        keywords: data.keywords || [],
        readingTime: data.readingTime || `${Math.ceil(stats.minutes)} min`,
        content,
      }
    }
  }

  return null
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const all = getAllPosts()
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

// Internal linking map
export const RELATED_ARTICLES: Record<string, string[]> = {
  'pr-review-bottleneck': ['sprint-predictability', 'context-switching-developers'],
  'alert-fatigue-devops': ['sprint-predictability', 'async-standups'],
  'async-standups': ['engineering-meetings', 'engineering-visibility'],
  'context-switching-developers': ['engineering-meetings', 'pr-review-bottleneck'],
  'engineering-visibility': ['async-standups', 'sprint-predictability'],
  'sprint-predictability': ['pr-review-bottleneck', 'alert-fatigue-devops'],
  'engineers-hate-jira': ['async-standups', 'context-switching-developers'],
  'engineering-meetings': ['async-standups', 'context-switching-developers'],
}
