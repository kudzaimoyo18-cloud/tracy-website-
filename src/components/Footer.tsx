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

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
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
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/971527675035',
    label: 'WhatsApp +971 52 767 5035',
  },
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
