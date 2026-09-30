export type AppStat = { value: string; label: string }

export const featuredWork = [
  {
    slug: 'self-healing-automation-backbone',
    title: 'A CRM that checks its own work',
    category: 'Automation',
    summary: 'An n8n layer connects GoHighLevel with 10 other platforms, then audits and repairs drift across 5 property pipelines.',
    proof: '90+ workflows built, 64 live',
    image: '/work/n8n-drive-sync.webp',
    alt: 'An n8n workflow connecting a property app with Google Drive',
  },
  {
    slug: 'multi-property-email-approval-app',
    title: 'Property emails with a clear approval path',
    category: 'Product',
    summary: 'A campaign builder keeps property email drafts, CRM sync, media, and client approval in one place.',
    proof: '1-click client approval',
    image: '/work/app-email-overview.webp',
    alt: 'The property email campaign application overview',
  },
  {
    slug: 'sales-marketing-intelligence-dashboard',
    title: 'A single view of leads and sales',
    category: 'Reporting',
    summary: 'A BI dashboard joins CRM leads with sales records, making pipeline performance and marketing ROI visible across 6 projects.',
    proof: '6 projects in one view',
    image: '/work/app-dash-overview.webp',
    alt: 'Sales and marketing dashboard showing project performance',
  },
  {
    slug: 'ghl-enrolment-crm',
    title: 'Enrolment without loose ends',
    category: 'CRM',
    summary: 'A GoHighLevel pipeline takes each enquiry through eligibility, follow-up, and enrolment with one morning dashboard.',
    proof: 'Enquiry to enrolment',
    image: '/work/ghl-dashboard.webp',
    alt: 'GoHighLevel enrolment dashboard',
  },
] as const

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

/**
 * Your apps. Every value is a PLACEHOLDER. Screenshots live in
 * public/placeholders/ - swap in your own (960x514 works well).
 */
const STATS: AppStat[] = [
  { value: '0', label: 'Stat one' },
  { value: '0', label: 'Stat two' },
  { value: '0', label: 'Stat three' },
]

const DESC = 'PLACEHOLDER - tell me what to put here: what the app does, who it is for, and where it is published.'

export const mobileApps: MobileApp[] = [
  {
    name: 'App Name One',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/app-1.jpg',
    imagePosition: '50% 30%',
    accentColor: '#2563EB',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'App Name Two',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/app-2.jpg',
    accentColor: '#7C3AED',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'App Name Three',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/app-3.jpg',
    accentColor: '#16A34A',
    stats: STATS,
    badge: 'Badge',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Web App One',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    accentColor: '#0EA5E9',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Two',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    accentColor: '#EF4444',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Three',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/project-3.jpg',
    accentColor: '#0891B2',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Four',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/project-4.jpg',
    accentColor: '#F59E0B',
    stats: STATS,
    badge: 'Badge',
  },
]
