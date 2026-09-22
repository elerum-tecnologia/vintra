'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Check } from 'lucide-react'
import { ActionButton } from '@/components/site/action-button'

export type ContactProps = {
  eyebrow?: string
  title: string
  description?: string
  email: string
  phone: string
  address: string
}

const details = (props: ContactProps) => [
  { icon: Mail, label: 'E-mail', value: props.email, href: `mailto:${props.email}` },
  { icon: Phone, label: 'Telefone', value: props.phone, href: `tel:${props.phone.replace(/[^0-9+]/g, '')}` },
  { icon: MapPin, label: 'Endereço', value: props.address },
]

export function Contact(props: ContactProps) {
  const { eyebrow, title, description } = props
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          {eyebrow && (
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          <ul className="mt-8 space-y-5">
            {details(props).map((d) => {
              const Icon = d.icon
              return (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-lg font-medium text-foreground hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">
                        {d.value}
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="bg-brand-gradient inline-flex size-14 items-center justify-center rounded-full text-white">
                <Check className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                Mensagem enviada!
              </h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Obrigado pelo contato. Nosso time responderá em até um dia útil.
              </p>
              <ActionButton
                variant="outline"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Enviar outra mensagem
              </ActionButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="voce@empresa.com.br"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <ActionButton type="submit" size="lg" variant="primary" fullWidth>
                Enviar
              </ActionButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
