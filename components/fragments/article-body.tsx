import { Check } from 'lucide-react'

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }

export type ArticleBodyProps = {
  blocks: ArticleBlock[]
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {blocks.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={i}
                  className="mt-12 text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  {block.text}
                </h2>
              )
            }

            if (block.type === 'list') {
              return (
                <ul key={i} className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                        <Check className="size-3" />
                      </span>
                      <span className="text-pretty text-lg leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )
            }

            if (block.type === 'quote') {
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-4 border-primary bg-accent/40 px-6 py-5"
                >
                  <p className="text-pretty text-xl font-medium italic leading-relaxed text-foreground">
                    {block.text}
                  </p>
                  {block.cite && (
                    <cite className="mt-3 block font-mono text-xs font-medium uppercase tracking-wider not-italic text-primary">
                      {block.cite}
                    </cite>
                  )}
                </blockquote>
              )
            }

            return (
              <p
                key={i}
                className="text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
