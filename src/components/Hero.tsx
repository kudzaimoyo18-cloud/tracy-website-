import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Skyline video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/dubai-hero.jpg"
        >
          <source src="/media/dubai-hero.mp4" type="video/mp4" />
        </video>
        {/* Tints to keep text readable + brand the footage */}
        <div className="absolute inset-0 bg-ink-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(60% 50% at 15% 80%, rgba(255,106,0,0.25), transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center pt-28 md:pt-24">
        <div className="shell px-6 md:px-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl"
            >
              <span className="text-gradient">Growth,</span>{' '}
              <span className="text-ember">engineered</span>{' '}
              <span className="text-gradient">for brands that refuse to blend in.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/70 md:text-xl"
            >
              We run paid, organic, PR, influencer and AI-powered content from one strategy —
              turning ambitious brands into category leaders across the Gulf and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-ember">
                Book a strategy call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-glass">
                <Play className="h-4 w-4" /> See the work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-sm text-white/60"
            >
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-ember-400 text-ember-400" />
                ))}
              </div>
              <span>
                Rated <strong className="text-white">4.9/5</strong> by 48+ brands we've scaled
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  )
}
