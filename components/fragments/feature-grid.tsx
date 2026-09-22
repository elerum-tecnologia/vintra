import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export type FeatureGridProps = {
  eyebrow?: string
  title: string
  intro?: string
  features: Feature[]
  background?: 'default' | 'muted'
}

export function FeatureGrid({
  eyebrow,
  title,
  intro,
  features,
  background = 'muted',
}: FeatureGridProps) {
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <span className="bg-brand-gradient inline-flex size-12 items-center justify-center rounded-xl text-white shadow-sm">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
