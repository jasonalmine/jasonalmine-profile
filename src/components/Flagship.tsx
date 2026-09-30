import { useState, useCallback, useEffect, useRef } from 'react'
import { ArrowSquareOut, House, UsersThree, SquaresFour, MagnifyingGlass, Pause, Play } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Screen = {
  id: string
  label: string
  path: string
  image: string
  caption: string
  Icon: Icon
}

const SCREENS: Screen[] = [
  {
    id: 'overview',
    label: 'Overview',
    path: '/dashboard',
    image: '/work/app-dash-overview.webp',
    caption: 'The all-project view puts sales, stock, lead volume, and marketing spend beside each other across 6 property developments.',
    Icon: House,
  },
  {
    id: 'leads',
    label: 'Leads',
    path: '/leads',
    image: '/work/app-dash-leads.webp',
    caption: 'The lead view shows daily volume, source, stage, and owner so the team can see where enquiries move and where they stop.',
    Icon: UsersThree,
  },
  {
    id: 'conversions',
    label: 'Conversion',
    path: '/conversions',
    image: '/work/app-dash-conversions.webp',
    caption: 'A stage-by-stage funnel shows drop-off and conversion rates, with each metric dated by the event that actually happened.',
    Icon: SquaresFour,
  },
  {
    id: 'mix',
    label: 'Buyer mix',
    path: '/price-product-place',
    image: '/work/app-dash-ppp.webp',
    caption: 'Price, product, and place views cross-tab the lead pool by budget, bedroom type, and suburb for each development.',
    Icon: MagnifyingGlass,
  },
]

const PROOF = [
  { metric: '6 projects', name: 'Coverage', context: '1 reporting view', detail: 'Lead and sale data from 6 property developments sits in one reporting system.', date: 'Published case study' },
  { metric: '$95.52m', name: 'Sales scope', context: 'All time', detail: 'Sales across the 6 projects, measured through 29 Sep 2026. This is a reporting total, not revenue attributed to the app.', date: '29 Sep 2026' },
  { metric: '1 click', name: 'CRM sync', context: 'Run history', detail: 'A paginated CRM pull resolves stages and owners to names and records each sync run.', date: 'Published case study' },
  { metric: '1 weekly', name: 'Summary email', context: 'Automated', detail: 'A scheduled report sends the latest numbers without the team rebuilding a spreadsheet.', date: 'Published case study' },
  { metric: 'Per metric', name: 'Date logic', context: 'Inspections to sales', detail: 'Inspection, expression-of-interest, and sale figures use their own event dates rather than 1 shared filter.', date: 'Published case study' },
]

const AUTO_ADVANCE_MS = 6000

type FlagshipProps = { eyebrow?: string }

export default function Flagship({ eyebrow = 'Featured build' }: FlagshipProps = {}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const [proofPaused, setProofPaused] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !inView) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % SCREENS.length), AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [paused, inView])

  const onTabKey = useCallback((e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const direction = e.key === 'ArrowRight' ? 1 : -1
    const next = (index + direction + SCREENS.length) % SCREENS.length
    setActive(next)
    const buttons = e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('button[role="tab"]')
    buttons?.[next]?.focus()
  }, [])

  const current = SCREENS[active]

  return (
    <aside className="flagship" aria-labelledby="flagship-heading" ref={ref}>
      <header className="flagship__header">
        <span className="flagship__eyebrow">{eyebrow}</span>
        <h3 className="flagship__title" id="flagship-heading">Sales Intelligence</h3>
        <p className="flagship__desc">
          I built a real-time BI dashboard that joins CRM leads with property sales across 6 projects. The team can inspect pipeline performance, campaign ROI, and buyer mix without reconciling separate reports.
        </p>
        <a className="flagship__cta" href="https://www.jasonalmine.com/work#sales-marketing-intelligence-dashboard" target="_blank" rel="noopener noreferrer">
          Read the case study
          <ArrowSquareOut weight="bold" size={16} aria-hidden="true" />
        </a>
      </header>

      <div className="flagship__showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <div className="flagship__device" aria-hidden="true">
          <div className="flagship__device-bar">
            <span className="flagship__dot flagship__dot--red" />
            <span className="flagship__dot flagship__dot--amber" />
            <span className="flagship__dot flagship__dot--green" />
            <span className="flagship__device-url">
              <span className="flagship__device-url-host">Sales intelligence</span>
              <span className="flagship__device-url-path">{current.path}</span>
            </span>
          </div>
          <div className="flagship__device-screen">
            <div className="flagship__stage" key={current.id}>
              <img className="flagship__screen-img" src={current.image} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <div className="flagship__panel">
          <div className="flagship__tabs" role="tablist" aria-label="Dashboard screens">
            {SCREENS.map((screen, i) => {
              const TabIcon = screen.Icon
              const selected = i === active
              return (
                <button key={screen.id} type="button" role="tab" aria-selected={selected} tabIndex={selected ? 0 : -1} className={`flagship__tab${selected ? ' is-active' : ''}`} onClick={() => setActive(i)} onKeyDown={(e) => onTabKey(e, i)}>
                  <span className="flagship__tab-icon" aria-hidden="true"><TabIcon size={16} weight="bold" /></span>
                  <span>{screen.label}</span>
                </button>
              )
            })}
          </div>
          <p className="flagship__caption" key={current.id}>{current.caption}</p>
          <div className="flagship__progress" aria-hidden="true">
            {SCREENS.map((_, i) => <span key={i} className={`flagship__progress-bar${i === active ? ' is-active' : ''}${paused || !inView ? ' is-paused' : ''}`} />)}
          </div>
        </div>
      </div>

      <div className="flagship__feedback" aria-labelledby="flagship-feedback-heading">
        <header className="flagship__feedback-header">
          <span className="flagship__feedback-eyebrow">From the published case study</span>
          <h4 className="flagship__feedback-title" id="flagship-feedback-heading">What the system shows.</h4>
          <button type="button" className="flagship__feedback-pause" onClick={() => setProofPaused((v) => !v)} aria-pressed={proofPaused} aria-label={proofPaused ? 'Resume scrolling proof' : 'Pause scrolling proof'}>
            {proofPaused ? <Play weight="fill" size={14} aria-hidden="true" /> : <Pause weight="fill" size={14} aria-hidden="true" />}
            <span>{proofPaused ? 'Play' : 'Pause'}</span>
          </button>
        </header>
        <div className={`flagship__feedback-marquee${proofPaused ? ' is-paused' : ''}`}>
          <div className="flagship__feedback-track" style={proofPaused ? { animationPlayState: 'paused' } : undefined}>
            {[...PROOF, ...PROOF].map((fact, i) => (
              <figure key={`${fact.name}-${i}`} className="flagship__feedback-card">
                <ArrowSquareOut className="flagship__feedback-quotemark" weight="bold" size={28} aria-hidden="true" />
                <span className="flagship__feedback-rating">{fact.metric}</span>
                <p className="flagship__feedback-quote">{fact.detail}</p>
                <figcaption className="flagship__feedback-author">
                  <span className="flagship__feedback-name">{fact.name}</span>
                  <span className="flagship__feedback-meta">
                    <span className="flagship__feedback-context">{fact.context}</span>
                    <span className="flagship__feedback-dot" aria-hidden="true">·</span>
                    <span className="flagship__feedback-date">{fact.date}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
