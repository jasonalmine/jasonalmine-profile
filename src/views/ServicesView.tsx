import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'

const services = [
  { number: '01', title: 'CRM architecture', text: 'A GoHighLevel workspace built around the way your team handles a lead, with clear stages, ownership, and follow-up.' },
  { number: '02', title: 'Automation', text: 'n8n workflows that move data between tools, check for gaps, and make failed handoffs visible before they become missed work.' },
  { number: '03', title: 'Reporting', text: 'Dashboards that join marketing activity with CRM and sales records, so the next decision starts with the same numbers.' },
]

export default function ServicesView() {
  return (
    <section className="profile-page profile-services" aria-labelledby="services-title">
      <header className="profile-pagehead">
        <p className="profile-kicker">What I do</p>
        <h1 id="services-title">Make the system<br /><em>match the work.</em></h1>
        <p>I design, build, and run the infrastructure behind lead capture and follow-through for service teams.</p>
      </header>
      <div className="profile-services__list">
        {services.map(({ number, title, text }) => (
          <article className="profile-services__row" key={number}>
            <span className="profile-kicker">{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <Link to="/contact" className="profile-link profile-services__cta">Walk me through your setup <ArrowUpRight size={20} /></Link>
    </section>
  )
}
