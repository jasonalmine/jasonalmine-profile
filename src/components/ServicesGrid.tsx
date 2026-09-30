import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Service copy follows the scope shown in the main portfolio.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Map',
    body: 'Trace how an enquiry becomes a booked or won job.',
    Icon: MagnetStraight,
    chips: ['Sources', 'Stages', 'Owners', 'Handoffs'],
  },
  {
    index: '02',
    label: 'Build',
    body: 'Connect the CRM, automations, and reporting.',
    Icon: Timer,
    chips: ['GoHighLevel', 'n8n', 'Dashboards'],
  },
  {
    index: '03',
    label: 'Operate',
    body: 'Test with real cases, train the team, and watch failures.',
    Icon: Trophy,
    chips: ['QA', 'Handover', 'Support'],
  },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const GHL = '/icons/gohighlevel.png'
const REACT = '/icons/ai/react.svg'
const VITE = '/icons/ai/vite.svg'
const CLOUDFLARE = '/icons/ai/cloudflare.svg'
const N8N = '/icons/ai/n8n.svg'
const OPENAI = '/icons/openai.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/slack.svg'
const META = '/icons/facebook.svg'
const CODEX = '/icons/codex.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'CRM architecture',
    description: 'A GoHighLevel setup that matches the way your team sells.',
    chip: 'GoHighLevel',
    logos: [GHL, N8N, GWS],
    bullets: ['Pipelines and ownership', 'Forms and calendars', 'Follow-up and reporting'],
  },
  {
    index: '02',
    title: 'Automation',
    description: 'n8n workflows that keep the CRM and other tools in sync.',
    chip: 'n8n',
    logos: [GHL, N8N, OPENAI],
    bullets: ['Lead routing', 'Data reconciliation', 'Failure alerts'],
  },
  {
    index: '03',
    title: 'Lead operations',
    description: 'A clear path from first response to the next action.',
    chip: 'CRM + team',
    logos: [GHL, GWS, SLACK],
    bullets: ['Speed to lead', 'Owner handoff', 'Nurture and reactivation'],
  },
  {
    index: '04',
    title: 'Reporting apps',
    description: 'Sales and marketing data in one working view.',
    chip: 'Build + BI',
    logos: [REACT, VITE, CLOUDFLARE],
    bullets: ['Pipeline health', 'Campaign ROI', 'Scheduled summaries'],
  },
  {
    index: '05',
    title: 'Funnels and ads',
    description: 'Campaigns that feed a CRM you can measure.',
    chip: 'GHL + paid',
    logos: [GHL, META, CODEX],
    bullets: ['Landing pages', 'Meta and Google Ads', 'Offline conversion loop'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          The systems behind the follow-through.
        </h1>
        <p className="pgrid__lede">
          I build the CRM, automation, reporting, and acquisition paths that service teams use every day.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My method</span>
            <h2 className="sgrid__method-title" id="method-title">
              Map. Build. Run.
              <br />
              <span>Then keep it working.</span>
            </h2>
            <p className="sgrid__method-sub">
              The system follows the real handoffs, then gets tested against the work your team does.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I build.</h2>
            <p className="sgrid__offers-sub">Scoped after a discovery call.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">A lead moves through the system.</h2>
              <p className="sgrid__flow-sub">
                This interactive example shows a lead entering the CRM, being routed, followed up, and reported.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
