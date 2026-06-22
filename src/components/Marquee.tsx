const PLATFORMS = [
  'Meta Ads',
  'Google Ads',
  'TikTok',
  'LinkedIn',
  'YouTube',
  'Snapchat',
  'Amazon Ads',
  'Spotify',
  'Pinterest',
  'X / Twitter',
]

export function Marquee() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-ink-950/40 py-8 backdrop-blur-sm">
      <div className="shell px-6 md:px-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
          Certified & always-on across every channel that matters
        </p>
      </div>
      <div className="mask-fade-x relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-medium text-white/35 transition-colors hover:text-ember-300 md:text-2xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
