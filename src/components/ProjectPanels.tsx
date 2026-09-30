import type { ReactNode } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'

const WORK = 'https://www.jasonalmine.com/work'

export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--strip">
      <WorkflowSamples />
    </div>
  )
}

function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ppanel__url"><span className="ppanel__url-host">{label}</span></span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

function CaseStudyFrame({ title, image, slug, alt }: { title: string; image: string; slug: string; alt: string }) {
  const href = `${WORK}#${slug}`
  return (
    <div className="ppanel ppanel--frame">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <a className="ppanel__url" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${title} case study`}>
          <span className="ppanel__url-host">View full case study</span>
          <span className="ppanel__url-path">/work#{slug}</span>
        </a>
      </div>
      <div className="ppanel__stage">
        <img className="ppanel__proof-img" src={image} alt={alt} />
      </div>
    </div>
  )
}

export function PlanPanel() {
  return <CaseStudyFrame title="enrolment CRM" image="/work/ghl-dashboard.webp" slug="ghl-enrolment-crm" alt="GoHighLevel enrolment dashboard" />
}

export function TicketingPanel() {
  return <CaseStudyFrame title="email approval app" image="/work/app-email-editor.webp" slug="multi-property-email-approval-app" alt="Property email editor and live preview" />
}

export function FrameworkPanel() {
  return <CaseStudyFrame title="sales intelligence dashboard" image="/work/app-dash-overview.webp" slug="sales-marketing-intelligence-dashboard" alt="All-project sales and marketing dashboard" />
}

export function WorkflowPanel() {
  return <CaseStudyFrame title="Meta ads triage demo" image="/work/ads-dash-hero.webp" slug="meta-ads-triage-dashboard" alt="Meta ads triage demo overview" />
}

export function BarrelPanel() {
  return <CaseStudyFrame title="coaching funnel suite" image="/work/funnel-business-sessions.webp" slug="coaching-funnel-suite" alt="Coaching funnel landing page" />
}

export function AIWindow() {
  return <SectionWindow label="Systems I run"><AIStackGrid /></SectionWindow>
}

export function AppsWindow() {
  return <SectionWindow label="Apps I built"><AppsSection /></SectionWindow>
}
