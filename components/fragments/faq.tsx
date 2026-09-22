'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FaqItem = {
  question: string
  answer: string
}

export type FaqProps = {
  eyebrow?: string
  title: string
  description?: string
  items: FaqItem[]
}

export function Faq({ eyebrow, title, description, items }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="font-mono text-sm uppercase tracking-widest text-indigo-600">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {items.map((item, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-panel-${i}`
            const buttonId = `${baseId}-button-${i}`
            return (
              <div
                key={i}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-indigo-200 bg-card shadow-sm dark:border-indigo-900/60'
                    : 'border-border bg-card',
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                        isOpen
                          ? 'bg-brand-gradient text-white'
                          : 'bg-muted text-muted-foreground',
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                >
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
