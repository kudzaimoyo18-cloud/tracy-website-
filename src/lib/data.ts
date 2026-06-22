import {
  Megaphone,
  Newspaper,
  Share2,
  Sparkles,
  Clapperboard,
  Search,
  LayoutDashboard,
  Hash,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  blurb: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    blurb: 'Full-funnel paid and organic engineered to compound — not just spend.',
    points: ['Paid social & search', 'Programmatic & display', 'Funnel architecture'],
  },
  {
    icon: Newspaper,
    title: 'Public Relations',
    blurb: 'Earned coverage and reputation that makes the market take you seriously.',
    points: ['Press & media outreach', 'Thought leadership', 'Crisis & reputation'],
  },
  {
    icon: Share2,
    title: 'Affiliate Marketing',
    blurb: 'Performance partnerships that pay for results, scaled across networks.',
    points: ['Partner recruitment', 'Network management', 'Payout optimization'],
  },
  {
    icon: Sparkles,
    title: 'Influencer Marketing',
    blurb: 'Creator partnerships matched to your audience, measured to the dirham.',
    points: ['Creator vetting', 'Campaign briefs', 'UGC at scale'],
  },
  {
    icon: Clapperboard,
    title: 'Content Creation — Human + AI',
    blurb: 'On-site production and AI workflows that ship premium content, fast.',
    points: ['Studio & on-location', 'AI content pipelines', 'Always-on calendar'],
  },
  {
    icon: Search,
    title: 'SEO',
    blurb: 'Technical, content and authority work that owns the search results.',
    points: ['Technical audits', 'Content velocity', 'Digital PR links'],
  },
  {
    icon: LayoutDashboard,
    title: 'Campaign Management',
    blurb: 'End-to-end orchestration — one team owning strategy through reporting.',
    points: ['Roadmaps & sprints', 'Budget pacing', 'Live dashboards'],
  },
  {
    icon: Hash,
    title: 'Social Media Strategy',
    blurb: 'Platform-native strategy that turns followers into a pipeline.',
    points: ['Channel strategy', 'Community building', 'Conversion content'],
  },
]

export type Stat = { value: number; suffix: string; label: string }

export const STATS: Stat[] = [
  { value: 320, suffix: '%', label: 'Avg. ROAS lift in 90 days' },
  { value: 5, suffix: 'M+', label: 'Qualified reach generated / month' },
  { value: 48, suffix: '', label: 'Brands scaled across the Gulf' },
  { value: 12, suffix: '', label: 'Markets activated worldwide' },
]

export type Step = { no: string; title: string; desc: string }

export const PROCESS: Step[] = [
  {
    no: '01',
    title: 'Discover',
    desc: 'We pressure-test your market, funnel and data to find the real growth lever.',
  },
  {
    no: '02',
    title: 'Strategy',
    desc: 'A channel-by-channel plan with targets, budgets and a 90-day roadmap.',
  },
  {
    no: '03',
    title: 'Create',
    desc: 'On-site production plus AI pipelines produce premium content at velocity.',
  },
  {
    no: '04',
    title: 'Launch',
    desc: 'Campaigns go live across paid, organic, PR, affiliate and influencer in sync.',
  },
  {
    no: '05',
    title: 'Optimize',
    desc: 'Weekly sprints, live dashboards and ruthless iteration toward the number.',
  },
]

export type Work = {
  brand: string
  sector: string
  metric: string
  result: string
  image: string
}

export const WORK: Work[] = [
  {
    brand: 'Lumière Residences',
    sector: 'Luxury Real Estate',
    metric: '+212%',
    result: 'qualified leads in one quarter',
    image: '/media/work-1.jpg',
  },
  {
    brand: 'Saffron & Smoke',
    sector: 'Hospitality · F&B',
    metric: '3.1M',
    result: 'organic reach from one launch',
    image: '/media/work-2.jpg',
  },
  {
    brand: 'Volt Finance',
    sector: 'Fintech',
    metric: '−38%',
    result: 'cost per acquisition',
    image: '/media/work-3.jpg',
  },
  {
    brand: 'Atlas Activewear',
    sector: 'E-commerce',
    metric: '4.7x',
    result: 'return on ad spend',
    image: '/media/work-4.jpg',
  },
  {
    brand: 'Marina Aesthetics',
    sector: 'Beauty · Healthcare',
    metric: '+180%',
    result: 'booked consultations',
    image: '/media/work-5.jpg',
  },
  {
    brand: 'Nomad Travel Co',
    sector: 'Travel',
    metric: '#1',
    result: 'search ranking in 9 months',
    image: '/media/work-6.jpg',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Wango rebuilt our entire funnel and tripled qualified leads in a single quarter. They operate like an in-house team that never sleeps.',
    name: 'Amira Haddad',
    role: 'CMO, Lumière Residences',
    avatar: '/media/avatar-1.jpg',
  },
  {
    quote:
      'The content engine alone is worth it — human-quality creative produced at a pace we could never hit internally.',
    name: 'Daniel Osei',
    role: 'Founder, Atlas Activewear',
    avatar: '/media/avatar-2.jpg',
  },
  {
    quote:
      'PR, paid and influencer finally working from one strategy. Our launch hit 3.1M reach with a fraction of the budget.',
    name: 'Sara Al-Mansoori',
    role: 'Brand Director, Saffron & Smoke',
    avatar: '/media/avatar-3.jpg',
  },
  {
    quote:
      'They cut our CAC by 38% while scaling spend. The weekly dashboards mean I always know exactly where the money goes.',
    name: 'Marcus Reyes',
    role: 'Growth Lead, Volt Finance',
    avatar: '/media/avatar-4.jpg',
  },
]

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'What size brands do you work with?',
    a: 'From funded startups to established regional names. The common thread is ambition and a budget ready to scale once we prove the model.',
  },
  {
    q: 'Do you replace our in-house team or work alongside it?',
    a: 'Both. We plug in as a full growth department or extend your existing team on the channels where you need firepower.',
  },
  {
    q: 'How fast do we see results?',
    a: 'Early signal in the first 2–4 weeks, with most clients seeing a meaningful ROAS or lead lift inside the first 90-day sprint.',
  },
  {
    q: 'How do you use AI in content?',
    a: 'AI accelerates research, variation and production — but every asset is directed and quality-controlled by our human creative team.',
  },
  {
    q: 'Are you Dubai-only?',
    a: 'We are built in Dubai and run campaigns across the GCC, UK, Europe and North America. Local nuance, global standards.',
  },
]

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
