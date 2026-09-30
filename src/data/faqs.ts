export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build GoHighLevel CRMs, n8n automations, reporting apps, and the funnels that feed them. Most clients are service businesses that have outgrown spreadsheets and disconnected tools.',
  },
  {
    q: 'How long does a build take?',
    a: 'A focused GoHighLevel build usually takes 2 to 4 weeks. Multi-system rollouts take longer. I set a timeline after we scope the work.',
  },
  {
    q: 'How much do you charge?',
    a: 'Project work starts around USD 2,000 and scales with scope. Ongoing ads and system tuning are quoted as a monthly retainer. I send a clear quote after a discovery call.',
  },
  {
    q: 'Where are you based?',
    a: 'I work from Cebu in the Philippines, UTC+8. I work asynchronously with clients across time zones and schedule calls to suit their hours.',
  },
  {
    q: 'What happens after I write?',
    a: 'I read the brief, ask what I need to clarify, then suggest a 30-minute discovery call when the project needs one. You speak with me from scope through delivery.',
  },
]
