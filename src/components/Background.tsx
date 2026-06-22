/**
 * Static ambient layer: faint grid + soft ember glows.
 * Intentionally NOT animated — animating large blurred elements forces
 * full-viewport re-rasterization every frame and tanks desktop performance.
 * Rendered once, composited cheaply, never repaints.
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

      {/* Soft ember glows (static gradients, no blur filter, no animation) */}
      <div
        className="absolute -left-[10%] top-[-5%] h-[36rem] w-[36rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.20), transparent 62%)' }}
      />
      <div
        className="absolute right-[-12%] top-[22%] h-[32rem] w-[32rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,138,0,0.14), transparent 62%)' }}
      />
      <div
        className="absolute bottom-[-12%] left-[28%] h-[34rem] w-[34rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(120,60,255,0.10), transparent 62%)' }}
      />
    </div>
  )
}
