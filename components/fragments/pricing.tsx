import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/site/action-button'
import { cn } from '@/lib/utils'

export type PricingPlan = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  highlighted?: boolean
  badge?: string
}

export type PricingProps = {
  eyebrow?: string
  title: string
  intro?: string
  plans: PricingPlan[]
  background?: 'default' | 'muted'
}

export function Pricing({
  eyebrow,
  title,
  intro,
  plans,
  background = 'default',
}: PricingProps) {
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

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex h-full flex-col rounded-2xl border bg-card p-8',
                plan.highlighted
                  ? 'border-primary shadow-xl lg:-mt-4 lg:mb-4'
                  : 'border-border shadow-sm',
              )}
            >
              {plan.highlighted && plan.badge && (
                <span className="bg-brand-gradient absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-card-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <ButtonLink
                  href={plan.cta.href}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  fullWidth
                >
                  {plan.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
