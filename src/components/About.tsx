import { Check } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { LazyVideo } from './ui/LazyVideo'

const PILLARS = [
  'Senior strategists on every account — no junior hand-offs',
  'One integrated team across paid, organic, PR & creative',
  'Human-directed creative, AI-accelerated production',
  'Transparent live dashboards — you always see the number',
]

export function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-ink-700 to-ink-950">
                <LazyVideo
                  src="/media/dubai-exec.mp4"
                  poster="/media/about.jpg"
                  className="absolute inset-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              </div>
            </div>
            {/* Floating glass badge */}
            <div className="glass-strong absolute -bottom-6 -left-4 w-48 rounded-2xl p-4 md:-left-8 animate-float">
              <div className="font-display text-3xl font-semibold text-ember">Dubai</div>
              <p className="text-xs text-white/60">HQ in the heart of the Middle East's fastest market</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Built in Dubai. <span className="text-ember">Wired for global growth.</span>
            </h2>
            <p className="mt-5 text-lg text-white/65">
              Wango Marketing is a growth partner for brands that want more than a vendor. We sit
              between strategy and execution — combining the pace of a startup, the polish of a
              luxury house and the data discipline of a performance shop.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <div className="glass-soft flex items-start gap-3 rounded-2xl p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember-500/20 text-ember-300 ring-1 ring-ember-500/30">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/80">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
