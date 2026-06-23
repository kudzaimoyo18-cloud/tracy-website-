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

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

const SOCIALS = [
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/wangomarketing?igsh=a3Fhc28xNGVyeXJj&utm_source=qr',
    label: 'Instagram',
  },
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/share/18f8NA8hjF/?mibextid=wwXIfr',
    label: 'Facebook',
  },
  { icon: PhoneIcon, href: 'tel:+971527675035', label: 'Call +971 52 767 5035' },
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
                  const external = s.href.startsWith('http')
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
            <div className="flex items-center gap-5">
              <a
                href="/privacy-policy.html"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <p>Built in Dubai · Running campaigns worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
