import Link from 'next/link'
import { Logo } from '@/components/site/logo'
import { mainNav, siteName, siteTagline } from '@/lib/site'

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.1v2.4H8v3.1h2.8V22z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 4c-2.17 0-2.44.01-3.3.05-.85.04-1.43.17-1.94.37-.53.2-.98.48-1.42.93-.45.44-.72.89-.93 1.42-.2.51-.33 1.1-.37 1.94C4.01 9.56 4 9.83 4 12s.01 2.44.05 3.3c.04.85.17 1.43.37 1.94.2.53.48.98.93 1.42.44.45.89.72 1.42.93.51.2 1.1.33 1.94.37.86.04 1.13.05 3.3.05s2.44-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37.53-.2.98-.48 1.42-.93.45-.44.72-.89.93-1.42.2-.51.33-1.1.37-1.94.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.93-1.42 3.9 3.9 0 0 0-1.42-.93c-.51-.2-1.1-.33-1.94-.37C14.44 4.01 14.17 4 12 4m0 1.8c2.13 0 2.39.01 3.23.05.78.04 1.2.17 1.49.28.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.28 1.49.04.84.05 1.1.05 3.23s-.01 2.39-.05 3.23c-.04.78-.17 1.2-.28 1.49-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.49.28-.84.04-1.1.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.17-1.49-.28a2.5 2.5 0 0 1-.92-.6 2.5 2.5 0 0 1-.6-.92c-.11-.28-.24-.7-.28-1.49-.04-.84-.05-1.1-.05-3.23s.01-2.39.05-3.23c.04-.78.17-1.2.28-1.49.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.49-.28.84-.04 1.1-.05 3.23-.05m0 3.06A4.14 4.14 0 1 0 12 17.14 4.14 4.14 0 0 0 12 8.86m0 6.83A2.69 2.69 0 1 1 12 10.3a2.69 2.69 0 0 1 0 5.39m5.27-7.03a.97.97 0 1 0 0 1.94.97.97 0 0 0 0-1.94',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M8.3 18V9.7H5.6V18zM6.95 8.6a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1M18.4 18v-4.6c0-2.5-1.3-3.6-3.1-3.6-1.4 0-2 .8-2.4 1.3V9.7h-2.7c.04.8 0 8.3 0 8.3h2.7v-4.6c0-.25 0-.5.08-.67.2-.5.65-1 1.4-1 1 0 1.4.75 1.4 1.85V18z',
  },
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M17.3 5.5h2.1l-4.6 5.3 5.4 7.2h-4.2l-3.3-4.4-3.8 4.4H6.8l4.9-5.7-5.2-6.8h4.3l3 4zm-.75 11h1.17L8.5 6.7H7.25z',
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  const columns = mainNav.filter((item) => item.children)

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo invert />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {siteTagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors hover:border-white/60 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.href}>
              <h2 className="font-display text-sm font-semibold text-white">
                <Link href={column.href} className="hover:text-white">
                  {column.label}
                </Link>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {siteName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/politica-de-cookies" className="hover:text-white">
              Política de cookies
            </Link>
            <Link href="/contato" className="hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
