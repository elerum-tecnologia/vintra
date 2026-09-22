import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteName } from '@/lib/site'

export function Logo({
  className,
  showName = true,
  invert = false,
}: {
  className?: string
  showName?: boolean
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label={`${siteName} — página inicial`}
    >
      <span className="bg-brand-gradient inline-flex size-9 items-center justify-center rounded-xl shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 6.5 12 18l7-11.5"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showName && (
        <span
          className={cn(
            'font-display text-xl font-bold tracking-tight',
            invert ? 'text-white' : 'text-foreground',
          )}
        >
          {siteName}
        </span>
      )}
    </Link>
  )
}
