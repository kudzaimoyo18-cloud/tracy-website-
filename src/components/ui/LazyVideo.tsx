import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '../../lib/utils'

type LazyVideoProps = {
  src: string
  poster: string
  className?: string
}

/**
 * Renders the poster image until the element is near the viewport, then mounts
 * the <video>. Keeps heavy below-the-fold clips out of the initial page load.
 */
export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '250px' })

  return (
    <div ref={ref} className={cn('h-full w-full', className)}>
      {inView ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      )}
    </div>
  )
}
