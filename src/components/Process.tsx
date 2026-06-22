import { PROCESS } from '../lib/data'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="section-pad relative z-10">
      <div className="shell">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A system, <span className="text-ember">not a guess.</span>
            </>
          }
          desc="A repeatable operating model that has scaled brands across five sectors. Five steps, run on a 90-day loop."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="glass glass-ring group h-full rounded-3xl p-6 transition-colors duration-300 hover:bg-white/[0.07]">
                <div className="font-display text-5xl font-semibold text-white/10 transition-colors duration-300 group-hover:text-ember-500/40">
                  {step.no}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
