import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: 'Blog Posts | Modern Blog',
  description: 'Read our latest blog posts about technology, design, and more.',
}

// This would typically come from a CMS or API
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "2024-03-20",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs"
  },
  {
    id: 2,
    title: "The Power of TypeScript",
    description: "Why TypeScript is becoming the standard for web development",
    date: "2024-03-19",
    readTime: "4 min read",
    slug: "power-of-typescript"
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for building beautiful interfaces with Tailwind",
    date: "2024-03-18",
    readTime: "6 min read",
    slug: "mastering-tailwind-css"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}