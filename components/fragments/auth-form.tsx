'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { ActionButton } from '@/components/site/action-button'
import { Logo } from '@/components/site/logo'

export type AuthField = {
  name: string
  label: string
  type: 'text' | 'email' | 'password'
  autoComplete?: string
  placeholder?: string
}

export type AuthFormProps = {
  title: string
  description?: string
  fields: AuthField[]
  submitLabel: string
  successMessage: string
  footerLinks?: { label: string; href: string; prefix?: string }[]
}

export function AuthForm({
  title,
  description,
  fields,
  submitLabel,
  successMessage,
  footerLinks,
}: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden px-4 py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 size-96 rounded-full bg-brand-from/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-brand-to/15 blur-3xl" />
      </div>

      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center text-center">
            <span className="bg-brand-gradient inline-flex size-12 items-center justify-center rounded-full text-white">
              <Check className="size-6" />
            </span>
            <p className="mt-4 text-foreground">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`auth-${field.name}`}
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {field.label}
                </label>
                <input
                  id={`auth-${field.name}`}
                  name={field.name}
                  type={field.type}
                  required
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
            ))}
            <ActionButton type="submit" size="lg" variant="primary" fullWidth>
              {submitLabel}
            </ActionButton>
          </form>
        )}

        {footerLinks && footerLinks.length > 0 && (
          <div className="mt-6 space-y-1 text-center text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <p key={link.href}>
                {link.prefix ? `${link.prefix} ` : ''}
                <Link href={link.href} className="font-medium text-primary hover:underline">
                  {link.label}
                </Link>
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
