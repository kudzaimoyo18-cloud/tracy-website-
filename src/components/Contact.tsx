import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const BUDGETS = ['$2k – $5k / mo', '$5k – $10k / mo', '$10k – $25k / mo', '$25k+ / mo']

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

type Detail = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
  external?: boolean
}

const DETAILS: Detail[] = [
  { icon: Mail, label: 'Email', value: 'hello@wangomarketing.com', href: 'mailto:hello@wangomarketing.com' },
  { icon: Phone, label: 'Phone', value: '+971 52 767 5035', href: 'tel:+971527675035' },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+971 52 767 5035',
    href: 'https://wa.me/971527675035',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: 'Dubai Production City, Dubai, UAE',
    href: 'https://www.google.com/maps/search/?api=1&query=Dubai%20Production%20City%2C%20Dubai%2C%20UAE',
    external: true,
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: BUDGETS[1], message: '' })

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`New project enquiry — ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\n${form.message}`,
    )
    window.location.href = `mailto:hello@wangomarketing.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="shell">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-6 md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(50% 80% at 90% 10%, rgba(255,106,0,0.22), transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(255,138,0,0.14), transparent 60%)',
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2">
            {/* Left: pitch + details */}
            <div>
              <Reveal>
                <span className="eyebrow">Let's talk</span>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Ready to become <span className="text-ember">the brand everyone watches?</span>
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/65">
                  Book a free 30-minute strategy call. We'll pressure-test your funnel and show you
                  exactly where the next wave of growth is hiding.
                </p>
              </Reveal>

              <div className="mt-8 space-y-3">
                {DETAILS.map((d, i) => {
                  const Icon = d.icon
                  return (
                    <Reveal key={d.label} delay={i * 0.06}>
                      <a
                        href={d.href}
                        {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="glass-soft group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/[0.07]"
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/15 text-ember-300 ring-1 ring-ember-500/30">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-widest text-white/40">
                            {d.label}
                          </span>
                          <span className="font-medium text-white/90">{d.value}</span>
                        </span>
                      </a>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6 md:p-8">
                {sent ? (
                  <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                    <CheckCircle2 className="h-14 w-14 text-ember-400" />
                    <h3 className="mt-4 font-display text-2xl font-semibold">Almost there!</h3>
                    <p className="mt-2 max-w-xs text-white/60">
                      Your email client is opening with the details. Hit send and we'll reply within
                      one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Field label="Full name">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Jane Doe"
                        className="input"
                      />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Work email">
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="jane@brand.com"
                          className="input"
                        />
                      </Field>
                      <Field label="Company">
                        <input
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          placeholder="Brand Co."
                          className="input"
                        />
                      </Field>
                    </div>
                    <Field label="Monthly budget">
                      <select
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className="input"
                      >
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} className="bg-ink-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="What are you trying to grow?">
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={4}
                        placeholder="A quick sentence about your goals…"
                        className="input resize-none"
                      />
                    </Field>
                    <button type="submit" className="btn-ember w-full">
                      Send enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-white/45">
        {label}
      </span>
      {children}
    </label>
  )
}
