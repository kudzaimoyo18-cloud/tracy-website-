import { motion } from 'framer-motion'

/**
 * Fixed, full-viewport ambient layer: drifting ember orbs + faint grid + grain.
 * Sits behind all content (z-0) and never intercepts pointer events.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(70% 60% at 50% 0%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(70% 60% at 50% 0%, #000 30%, transparent 80%)',
        }}
      />

      {/* Drifting orbs */}
      <motion.div
        className="absolute -left-40 top-[-10%] h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.30), transparent 65%)' }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(255,138,0,0.22), transparent 65%)' }}
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[36rem] w-[36rem] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(120,60,255,0.16), transparent 65%)' }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grain */}
      <div className="noise absolute inset-0 opacity-[0.04] mix-blend-overlay" />
    </div>
  )
}
