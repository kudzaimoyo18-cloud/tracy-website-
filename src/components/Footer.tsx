import type { SVGProps } from 'react'
import { NAV_LINKS, SERVICES } from '../lib/data'
import { Logo } from './Logo'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 12s0-3.3-.42-4.88a2.55 2.55 0 0 0-1.8-1.8C19.2 4.9 12 4.9 12 4.9s-7.2 0-8.78.42a2.55 2.55 0 0 0-1.8 1.8C1 8.7 1 12 1 12s0 3.3.42 4.88c.23.86.9 1.53 1.8 1.8C4.8 19.1 12 19.1 12 19.1s7.2 0 8.78-.42a2.55 2.55 0 0 0 1.8-1.8C23 15.3 23 12 23 12zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const SOCIALS = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { icon: XIcon, href: '#', label: 'X' },
]

export function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-10 pt-10 md:px-10">
      <div className="shell">
        <div className="glass-strong rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-2.5">
                <Logo className="h-9 w-9" />
                <span className="font-display text-xl font-semibold tracking-tight">
                  Wango<span className="text-ember"> Marketing</span>
                </span>
              </a>
              <p className="mt-4 max-w-sm text-white/55">
                The Dubai-built growth agency running paid, organic, PR, influencer and AI content
                from one relentless strategy.
              </p>
              <div className="mt-6 flex gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-colors hover:text-ember-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Navigate
              </h4>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-white/65 transition-colors hover:text-white"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row">
            <p>© {new Date().getFullYear()} Wango Marketing. All rights reserved.</p>
            <p>Built in Dubai · Running campaigns worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
