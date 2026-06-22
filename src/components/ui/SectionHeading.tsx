import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '../../lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  desc?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl text-center items-center' : 'max-w-2xl',
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {desc && <p className="text-lg text-white/60">{desc}</p>}
    </Reveal>
  )
}
