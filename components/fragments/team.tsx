import Image from 'next/image'
import { cn } from '@/lib/utils'

export type TeamMember = {
  name: string
  role: string
  image: { src: string; alt: string }
}

export type TeamProps = {
  eyebrow?: string
  title: string
  intro?: string
  members: TeamMember[]
  background?: 'default' | 'muted'
}

export function Team({
  eyebrow,
  title,
  intro,
  members,
  background = 'default',
}: TeamProps) {
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative size-32 overflow-hidden rounded-full ring-4 ring-accent">
                <Image
                  src={member.image.src || '/placeholder.svg'}
                  alt={member.image.alt}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
