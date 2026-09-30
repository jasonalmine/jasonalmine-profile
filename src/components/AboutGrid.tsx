import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'

export default function AboutGrid() {
  return (
    <section className="profile-page profile-about" aria-labelledby="about-title">
      <header className="profile-pagehead">
        <p className="profile-kicker">About Jason</p>
        <h1 id="about-title">Operator first.<br /><em>Builder always.</em></h1>
      </header>
      <div className="profile-about__layout">
        <div className="profile-about__portrait"><img src={profile.avatarSrc} alt="Jason Almine" /></div>
        <div className="profile-about__copy">
          <p>I run Ventryx from Cebu, Philippines. I work with service businesses whose leads, follow-up, and reporting have outgrown a collection of manual fixes.</p>
          <p>My work is hands-on: I map the real process, build the CRM and automation around it, then stay close enough to see what fails in daily use. The goal is a system the team can understand and operate.</p>
          <p>The portfolio shows the details because details are where systems earn trust.</p>
          <div className="profile-about__meta"><span>Based in Cebu</span><span>Working across time zones</span><span>GoHighLevel · n8n · AI tools</span></div>
          <Link to="/work" className="profile-link">See the work <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}
