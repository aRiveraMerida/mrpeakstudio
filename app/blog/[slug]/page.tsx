import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a CMS or API
const posts = {
  'getting-started-with-nextjs': {
    title: "Getting Started with Next.js",
    date: "2024-03-20",
    readTime: "5 min read",
    content: `
      Next.js is a powerful framework for building React applications. It provides 
      features like server-side rendering, static site generation, and API routes 
      out of the box.

      In this post, we'll explore the basics of Next.js and how to get started 
      with your first project.
    `
  },
  'power-of-typescript': {
    title: "The Power of TypeScript",
    date: "2024-03-19",
    readTime: "4 min read",
    content: `
      TypeScript has become the go-to choice for many developers building large-scale 
      applications. Its type system helps catch errors early and improves code 
      maintainability.

      Let's dive into why TypeScript is becoming the standard for web development.
    `
  },
  'mastering-tailwind-css': {
    title: "Mastering Tailwind CSS",
    date: "2024-03-18",
    readTime: "6 min read",
    content: `
      Tailwind CSS has revolutionized how we style web applications. Its utility-first 
      approach provides flexibility and consistency while maintaining developer 
      productivity.

      In this guide, we'll cover advanced techniques for building beautiful interfaces 
      with Tailwind CSS.
    `
  }
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Mr.Peak Studio Blog`,
    description: post.content.slice(0, 155) + '...',
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-muted-foreground mb-8">
            {post.date} · {post.readTime}
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}