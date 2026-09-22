import { ButtonLink } from '@/components/site/action-button'

export type CtaProps = {
  title: string
  description?: string
  button: { label: string; href: string }
}

export function Cta({ title, description, button }: CtaProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, white 0, transparent 35%), radial-gradient(circle at 80% 80%, white 0, transparent 35%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-pretty text-lg leading-relaxed text-white/90">
                {description}
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <ButtonLink href={button.href} variant="white" size="lg">
                {button.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
