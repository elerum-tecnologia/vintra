import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type BlogPost = {
  image: { src: string; alt: string }
  category: string
  title: string
  excerpt: string
  href: string
}

export type BlogListProps = {
  eyebrow?: string
  title: string
  intro?: string
  posts: BlogPost[]
  background?: 'default' | 'muted'
}

export function BlogList({
  eyebrow,
  title,
  intro,
  posts,
  background = 'default',
}: BlogListProps) {
  return (
    <section
      className={cn('py-16 sm:py-24', background === 'muted' && 'bg-muted')}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image.src || '/placeholder.svg'}
                  alt={post.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-card-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 hover:text-primary/80"
                >
                  Ler artigo
                  <ArrowRight className="size-4 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
