/**
 * The systems tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card).
 *
 * This file is the ONLY place node copy lives. AIStack.tsx and AIStackGrid.tsx
 * render whatever shape they find here, so swapping in content is a data edit
 * and never a JSX edit. Keep the exported names and types stable.
 *
 * Shape rules:
 * - The root is you. Its children are the categories (branches).
 * - A branch with `status` is itself a system; a branch without one is a
 *   group whose children are the systems.
 * - Status is what the thing actually does today: "Live" (in use by others),
 *   "Internal" (works, you use it), "Beta".
 * - Logo marks in AIStackGrid.tsx are keyed by the node `id` below.
 */

import {
  Sparkle,
  Coffee,
  Robot,
  Article,
  FilmSlate,
  UsersThree,
  Database,
  SlackLogo,
  MagnifyingGlass,
  ChatCircleDots,
  FlowArrow,
  PhoneCall,
  Browser,
  Broadcast,
  Timer,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

/** A vendor mark, masked to a single ink colour so the row reads as one set
 *  rather than a rainbow of brand palettes. Only marks that already exist in
 *  public/icons are listed. */
export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a non-technical client understands. */
  what: string
  /** Real stack / model / where it runs. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const ANTHROPIC: StackLogo = { src: '/icons/anthropic.svg', name: 'Anthropic' }
const OPENAI: StackLogo = { src: '/icons/openai.svg', name: 'OpenAI' }
const SLACK: StackLogo = { src: '/icons/slack.svg', name: 'Slack' }
const GHL: StackLogo = { src: '/icons/gohighlevel.png', name: 'GoHighLevel' }

/** Single root: you. Branches are the categories. */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'I build CRM, automation, and reporting systems that service teams can run.',
  stack: 'Ventryx · Cebu, Philippines',
  children: [
    {
      id: 'project-a',
      Icon: Coffee,
      logos: [ANTHROPIC],
      name: 'Speed to Lead',
      what: 'Routes new enquiries to the right owner and starts follow-up.',
      stack: 'GoHighLevel · n8n',
      status: 'Live',
    },
    {
      id: 'category-one',
      Icon: Robot,
      name: 'Client systems',
      what: 'Apps and CRMs built around an actual operating workflow.',
      children: [
        {
          id: 'project-b',
          Icon: Article,
          logos: [ANTHROPIC],
          name: 'Email approval app',
          what: 'Builds property emails, syncs them with the CRM, and records client approval.',
          stack: 'React · GoHighLevel API',
          status: 'Live',
        },
        {
          id: 'project-c',
          Icon: FilmSlate,
          logos: [OPENAI],
          name: 'Sales intelligence',
          what: 'Shows leads, sales, and campaign ROI across 6 property projects.',
          stack: 'React · GoHighLevel API',
          status: 'Live',
        },
        {
          id: 'project-d',
          Icon: UsersThree,
          logos: [ANTHROPIC],
          name: 'Enrolment CRM',
          what: 'Tracks training enquiries through enrolment in 1 pipeline.',
          stack: 'GoHighLevel',
          status: 'Live',
        },
      ],
    },
    {
      id: 'category-two',
      Icon: Database,
      name: 'Operations',
      what: 'The connections and safeguards behind daily client work.',
      children: [
        {
          id: 'project-e',
          Icon: SlackLogo,
          logos: [ANTHROPIC, SLACK],
          name: 'Billing sync',
          what: 'Turns approved Asana time into deduped Xero invoices.',
          stack: 'n8n · Asana · Xero',
          status: 'Live',
        },
        {
          id: 'project-f',
          Icon: MagnifyingGlass,
          logos: [ANTHROPIC],
          name: 'Lead parsers',
          what: 'Normalises 8 lead sources into one CRM routing pattern.',
          stack: 'n8n · GoHighLevel',
          status: 'Live',
        },
      ],
    },
    {
      id: 'category-three',
      Icon: ChatCircleDots,
      name: 'Acquisition',
      what: 'Campaign and funnel systems connected back to the pipeline.',
      children: [
        {
          id: 'project-g',
          Icon: FlowArrow,
          logos: [ANTHROPIC],
          name: 'Meta ads triage',
          what: 'A demo dashboard that surfaces the 1 ad needing a decision.',
          stack: 'Next.js · generated demo data',
          status: 'Internal',
        },
        {
          id: 'project-h',
          Icon: PhoneCall,
          logos: [ANTHROPIC],
          name: 'Coaching funnels',
          what: 'Captures and segments enquiries for 7 advisory brands.',
          stack: 'GoHighLevel funnels',
          status: 'Live',
        },
        {
          id: 'project-i',
          Icon: Browser,
          logos: [ANTHROPIC],
          name: 'Meta media buying',
          what: 'Tracks leads and cost per result across 4 documented accounts.',
          stack: 'Meta Ads · GoHighLevel',
          status: 'Live',
        },
      ],
    },
    {
      id: 'project-j',
      Icon: Broadcast,
      logos: [GHL],
      name: 'Automation backbone',
      what: 'Keeps CRM records and 10 other tools in sync.',
      stack: 'n8n · GoHighLevel',
      status: 'Live',
      children: [
        {
          id: 'project-k',
          Icon: Timer,
          name: 'Self-healing audits',
          what: 'Checks 5 property pipelines and repairs drift on a schedule.',
          stack: 'n8n · GoHighLevel',
          status: 'Live',
        },
      ],
    },
  ],
}
