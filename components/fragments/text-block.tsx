import Image from 'next/image'
import { cn } from '@/lib/utils'

export type TextBlockProps = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  image?: { src: string; alt: string }
  imagePosition?: 'left' | 'right' | 'none'
  background?: 'default' | 'muted'
}

export function TextBlock({
  eyebrow,
  title,
  paragraphs,
  image,
  imagePosition = 'right',
  background = 'default',
}: TextBlockProps) {
  const hasImage = Boolean(image) && imagePosition !== 'none'

  return (
    <section
      className={cn(
        'py-16 sm:py-20',
        background === 'muted' && 'bg-muted',
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
          hasImage
            ? 'grid items-center gap-12 lg:grid-cols-2'
            : 'max-w-3xl',
        )}
      >
        <div className={cn(hasImage && imagePosition === 'left' && 'lg:order-2')}>
          {eyebrow && (
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {hasImage && image && (
          <div
            className={cn(
              'relative',
              imagePosition === 'left' && 'lg:order-1',
            )}
          >
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={720}
                height={540}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
