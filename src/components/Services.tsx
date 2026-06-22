import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../lib/data'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { TiltCard } from './ui/TiltCard'

export function Services() {
  return (
    <section id="services" className="section-pad relative z-10">
      <div className="shell">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One team. <span className="text-ember">Every growth channel.</span>
            </>
          }
          desc="Most agencies sell you a single tactic. Wango runs your entire growth stack from one strategy — so the channels compound instead of competing."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.06}>
                <TiltCard className="h-full">
                  <article className="glass glass-ring relative flex h-full flex-col rounded-3xl p-6 transition-transform duration-300">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ember-500/15 text-ember-300 ring-1 ring-ember-500/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{service.blurb}</p>
                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {service.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-white/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/20 transition-all duration-300 group-hover:text-ember-300" />
                  </article>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
