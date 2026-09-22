import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'

export type ArticleAuthor = {
  name: string
  role: string
  image: { src: string; alt: string }
}

export type ArticleHeaderProps = {
  category: string
  title: string
  excerpt?: string
  author: ArticleAuthor
  date: string
  readTime: string
  image: { src: string; alt: string }
  backHref?: string
  backLabel?: string
}

export function ArticleHeader({
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  backHref = '/recursos/blog',
  backLabel = 'Voltar para o blog',
}: ArticleHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-brand-from/15 blur-3xl" />
        <div className="absolute -right-24 top-10 size-96 rounded-full bg-brand-to/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 hover:text-primary/80"
        >
          <ArrowLeft className="size-4 transition-transform" />
          {backLabel}
        </Link>

        <div className="mt-6">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
            {category}
          </span>
          <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {excerpt && (
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="relative size-11 overflow-hidden rounded-full border border-border">
              <Image
                src={author.image.src || '/placeholder.svg'}
                alt={author.image.alt}
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                {author.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {author.role}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" />
              {readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt}
            width={960}
            height={540}
            priority
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
