import { STATS } from '../lib/data'
import { Counter } from './ui/Counter'
import { Reveal } from './ui/Reveal'

export function Stats() {
  return (
    <section className="relative z-10 px-6 pb-8 md:px-10">
      <div className="shell">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(50% 120% at 100% 0%, rgba(255,106,0,0.25), transparent 60%)',
              }}
            />
            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-display text-4xl font-semibold tracking-tight text-ember md:text-6xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/60 md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
