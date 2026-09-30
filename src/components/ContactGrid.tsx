import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'

const channels = [
  { label: 'Book a call', value: '30-minute discovery', href: 'https://www.jasonalmine.com/calendar', note: 'Bring the handoff or reporting problem you want to solve.' },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, note: 'For a brief, an introduction, or an async question.' },
  { label: 'WhatsApp', value: 'Message Jason', href: 'https://wa.me/639772485490?text=Hi%20Jason%2C%20I%20was%20reading%20your%20profile%20and%20had%20a%20question.', note: 'A direct message if that is easier.' },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/jason-almine-89784655/', note: 'For professional introductions.' },
]

export default function ContactGrid() {
  return (
    <section className="profile-page profile-contact" aria-labelledby="contact-title">
      <header className="profile-pagehead">
        <p className="profile-kicker">Contact</p>
        <h1 id="contact-title">Show me where<br /><em>the work gets stuck.</em></h1>
        <p>A short description of your current tools and the handoff that fails is enough to start.</p>
      </header>
      <div className="profile-contact__list">
        {channels.map(({ label, value, href, note }) => (
          <a className="profile-contact__row" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
            <span className="profile-kicker">{label}</span>
            <strong>{value}</strong>
            <span>{note}</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}
