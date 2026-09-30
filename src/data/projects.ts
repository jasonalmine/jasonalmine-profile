export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/** Published work and scoped metrics from the main portfolio. */

export const mobileApps: MobileApp[] = [
  {
    name: 'Property Email App',
    tagline: 'Build, sync, and approve branded emails.',
    description: 'A multi-property email builder with a public approval link and 2-way GoHighLevel sync.',
    imageSrc: '/work/app-email-overview.webp',
    imagePosition: '50% 30%',
    accentColor: '#96532C',
    stats: [{ value: '2-way', label: 'CRM sync' }, { value: '1-click', label: 'approval' }, { value: '1', label: 'shared app' }],
    badge: 'Client app',
  },
  {
    name: 'Sales Intelligence',
    tagline: 'Lead, sales, and ROI in one view.',
    description: 'A BI dashboard spanning 6 property projects with a scheduled weekly summary.',
    imageSrc: '/work/app-dash-leads.webp',
    accentColor: '#834521',
    stats: [{ value: '6', label: 'projects' }, { value: '1', label: 'BI view' }, { value: '1', label: 'weekly report' }],
    badge: 'Client app',
  },
  {
    name: 'Meta Ads Triage',
    tagline: 'The 1 ad that needs a decision.',
    description: 'A 6-view demo reporting app for clinics, running on generated data with no API keys.',
    imageSrc: '/work/ads-dash-hero.webp',
    accentColor: '#96532C',
    stats: [{ value: '6', label: 'views' }, { value: '16', label: 'demo ads' }, { value: '0', label: 'API keys' }],
    badge: 'Product demo',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Enrolment CRM',
    tagline: 'A pipeline built around enrolment.',
    description: 'A GoHighLevel CRM with every stage automated and 179 opportunities tracked.',
    imageSrc: '/work/ghl-dashboard.webp',
    accentColor: '#96532C',
    stats: [{ value: '179', label: 'opportunities' }, { value: '1', label: 'pipeline' }, { value: '18.99%', label: 'won by count' }],
    badge: 'Client CRM',
  },
  {
    name: 'Automation Backbone',
    tagline: 'Keeping 10 platforms in sync.',
    description: 'A self-healing n8n suite connecting the CRM, billing, project data, and lead intake.',
    imageSrc: '/work/n8n-drive-sync.webp',
    accentColor: '#834521',
    stats: [{ value: '90+', label: 'built' }, { value: '64', label: 'live' }, { value: '10', label: 'platforms' }],
    badge: 'Client automation',
  },
  {
    name: 'Coaching Funnels',
    tagline: 'From assessment to checkout.',
    description: 'Sales pages, assessment funnels, and membership checkouts built in GHL for 7 brands.',
    imageSrc: '/work/funnel-business-sessions.webp',
    accentColor: '#96532C',
    stats: [{ value: '7', label: 'brands' }, { value: '9', label: 'offers migrated' }, { value: '4', label: 'assessments' }],
    badge: 'Client funnels',
  },
  {
    name: 'Lead-Gen Campaigns',
    tagline: 'Campaigns judged on qualified leads.',
    description: 'Meta and Google campaign work documented with account screenshots and cost-per-lead evidence.',
    imageSrc: '/work/ads-proof-cpl.webp',
    accentColor: '#834521',
    stats: [{ value: '21,583', label: 'Meta leads' }, { value: '4', label: 'accounts shown' }, { value: '$1.76', label: 'CPL example' }],
    badge: 'Paid media',
  },
]
