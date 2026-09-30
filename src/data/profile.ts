/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Keep these details aligned with the
 * main portfolio when contact information or role copy changes.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, FlowArrow, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Jason Almine',
  firstName: 'Jason',
  handle: '@jasonalmine',
  role: 'Operator & Builder',
  avatarSrc: '/profile.png',
  verifiedLabel: 'Work documented in published case studies',
  email: 'email@jasonalmine.dev',
  location: 'Cebu, Philippines · UTC+8',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '90+', label: 'workflows built', Icon: FlowArrow },
    { value: '6', label: 'projects in 1 BI view', Icon: Briefcase },
    { value: 'UTC+8', label: 'based in Cebu', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'I build systems', line2: 'that last.' },
  hero: {
    body: 'GoHighLevel CRMs, n8n automation, and reporting for service teams.',
    portraitSrc: '/profile.png',
    portraitAlt: 'Portrait of Jason Almine',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/jason-almine-89784655/', iconPath: '/icons/linkedin.svg' },
    { label: 'GitHub profile', href: 'https://github.com/jasonalmine', iconPath: '/icons/ai/github.svg' },
    { label: 'Email Jason', href: 'mailto:email@jasonalmine.dev', iconPath: '/icons/mail.svg' },
  ],
}
