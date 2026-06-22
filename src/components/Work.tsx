import { ArrowUpRight } from 'lucide-react'
import { WORK } from '../lib/data'
import { cn } from '../lib/utils'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Work() {
  return (
    <section id="work" className="section-pad relative z-10">
      <div className="shell">
        <SectionHeading
          align="left"
          eyebrow="Selected work"
          title={
            <>
              Numbers that moved <span className="text-ember">the business.</span>
            </>
          }
          desc="A snapshot of campaigns where strategy, content and media bought serious results."
        />

        <div className="mt-14 grid auto-rows-[20rem] grid-cols-1 gap-5 md:grid-cols-3">
          {WORK.map((item, i) => (
            <Reveal
              key={item.brand}
              delay={(i % 3) * 0.06}
              className={cn(i === 0 && 'md:col-span-2 md:row-span-1')}
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
                {/* Fallback gradient sits under the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950" />
                <img
                  src={item.image}
                  alt={`${item.brand} — ${item.sector}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">
                    {item.sector}
                  </span>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        {item.metric}
                      </div>
                      <p className="mt-1 text-sm text-white/70">{item.result}</p>
                    </div>
                    <div className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-3 border-t border-white/10 pt-3 font-display text-lg font-medium text-white/90">
                    {item.brand}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
