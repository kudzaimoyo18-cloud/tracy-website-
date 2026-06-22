import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../lib/data'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Testimonials() {
  return (
    <section className="section-pad relative z-10">
      <div className="shell">
        <SectionHeading
          eyebrow="Proof"
          title={
            <>
              The brands behind <span className="text-ember">the numbers.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="glass glass-ring flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-8 w-8 text-ember-500/50" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-white/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-ember-grad font-display font-semibold text-white">
                    {t.name.charAt(0)}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/55">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
