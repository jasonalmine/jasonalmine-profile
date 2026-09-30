import { Briefcase, Clock, FlowArrow, type Icon } from '@/components/slab'

export type SocialLink = { label: string; href: string; iconPath: string }
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: { body: string; portraitSrc: string; portraitAlt: string }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Jason Almine',
  firstName: 'Jason',
  handle: 'Operator & Builder',
  role: 'CRM and automation systems',
  avatarSrc: '/profile.png',
  verifiedLabel: 'Jason Almine',
  email: 'email@jasonalmine.dev',
  location: 'Cebu, Philippines · UTC+8',
  stats: [
    { value: '90+', label: 'workflows built', Icon: FlowArrow },
    { value: '6', label: 'projects in one BI view', Icon: Briefcase },
    { value: 'UTC+8', label: 'based in Cebu', Icon: Clock },
  ],
  displayName: { line1: 'I build the systems', line2: 'behind the work.' },
  hero: {
    body: 'GoHighLevel CRMs, n8n automation, and reporting that help service teams follow through.',
    portraitSrc: '/profile.png',
    portraitAlt: 'Portrait of Jason Almine',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/jason-almine-89784655/', iconPath: '/icons/linkedin.svg' },
  ],
}
