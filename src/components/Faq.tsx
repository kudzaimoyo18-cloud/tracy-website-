import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '../lib/data'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { cn } from '../lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-pad relative z-10">
      <div className="shell max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div
                  className={cn(
                    'glass overflow-hidden rounded-2xl transition-colors duration-300',
                    isOpen && 'bg-white/[0.07]',
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-medium text-white">{faq.q}</span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-ember-300 transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-white/65">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
