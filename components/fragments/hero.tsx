import Image from 'next/image'
import { ButtonLink } from '@/components/site/action-button'
import { cn } from '@/lib/utils'

export type HeroAction = { label: string; href: string }

export type HeroProps = {
  eyebrow?: string
  title: string
  description?: string
  primary?: HeroAction
  secondary?: HeroAction
  image?: { src: string; alt: string }
  /** 'lg' = tall home hero, 'sm' = compact subpage hero */
  size?: 'lg' | 'sm'
}

export function Hero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  size = 'lg',
}: HeroProps) {
  const hasImage = Boolean(image) && size === 'lg'

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border',
        size === 'lg' ? 'py-20 sm:py-28' : 'py-14 sm:py-20',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-brand-from/15 blur-3xl" />
        <div className="absolute -right-24 top-10 size-96 rounded-full bg-brand-to/15 blur-3xl" />
      </div>

      <div
        className={cn(
          'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
          hasImage
            ? 'grid items-center gap-12 lg:grid-cols-2'
            : 'max-w-3xl text-center',
        )}
      >
        <div className={cn(!hasImage && 'mx-auto')}>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-border bg-accent/60 px-3 py-1 font-mono text-xs font-medium tracking-wide text-accent-foreground">
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              'mt-5 text-balance font-display font-bold tracking-tight text-foreground',
              size === 'lg'
                ? 'text-4xl sm:text-5xl lg:text-6xl'
                : 'text-3xl sm:text-4xl lg:text-5xl',
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                'mt-6 text-pretty text-lg leading-relaxed text-muted-foreground',
                !hasImage && 'mx-auto',
              )}
            >
              {description}
            </p>
          )}
          {(primary || secondary) && (
            <div
              className={cn(
                'mt-8 flex flex-wrap gap-3',
                !hasImage && 'justify-center',
              )}
            >
              {primary && (
                <ButtonLink href={primary.href} variant="primary" size="lg">
                  {primary.label}
                </ButtonLink>
              )}
              {secondary && (
                <ButtonLink href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>

        {hasImage && image && (
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={720}
                height={560}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
