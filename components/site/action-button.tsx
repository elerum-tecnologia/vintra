import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const actionButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-gradient text-white shadow-sm hover:opacity-90 active:translate-y-px',
        outline:
          'border border-border bg-background text-foreground hover:bg-muted active:translate-y-px',
        ghost: 'text-foreground/80 hover:bg-muted hover:text-foreground',
        white:
          'bg-white text-indigo-600 shadow-sm hover:bg-white/90 active:translate-y-px',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type Variants = VariantProps<typeof actionButtonVariants>

export function ButtonLink({
  href,
  className,
  variant,
  size,
  fullWidth,
  children,
}: Variants & {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(actionButtonVariants({ variant, size, fullWidth }), className)}
    >
      {children}
    </Link>
  )
}

export function ActionButton({
  className,
  variant,
  size,
  fullWidth,
  type = 'button',
  ...props
}: Variants &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(actionButtonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  )
}
