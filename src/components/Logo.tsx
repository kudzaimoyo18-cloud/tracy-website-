import { cn } from '../lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl bg-ember-grad shadow-glow',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[60%] w-[60%]">
        <path
          d="M3 5l3.2 11L9.8 8l2.2 8L15.8 8 19 16"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
