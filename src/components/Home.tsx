import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'
import { featuredWork } from '@/data/projects'
import ToolsMarquee from './ToolsMarquee'
import { HomeProfile } from './HomeMobile'

export default function Home() {
  return (
    <section className="profile-page profile-home" aria-labelledby="home-title">
      <div className="profile-home__mobile"><HomeProfile /></div>
      <div className="profile-home__intro">
        <p className="profile-kicker">Jason Almine / Operator & Builder</p>
        <h1 id="home-title" className="profile-display">
          I build the systems<br />{' '}behind the work<span className="profile-period">.</span>
        </h1>
        <div className="profile-home__lede-row">
          <p>{profile.hero.body}</p>
          <Link to="/contact" className="profile-link">Start a conversation <ArrowUpRight size={18} /></Link>
        </div>
      </div>

      <div className="profile-toolband">
        <div className="profile-toolband__label">
          <span className="profile-kicker">The working stack</span>
          <strong>Tools I use</strong>
        </div>
        <ToolsMarquee />
      </div>

      <div className="profile-bento" aria-label="Explore the portfolio">
        <Link to="/work" className="profile-bento__work">
          <span className="profile-card-head"><span>Selected work</span><ArrowUpRight size={19} /></span>
          <div className="profile-bento__work-copy">
            <strong>Proof in the build.</strong>
            <span>See the systems, screens, and outcomes.</span>
          </div>
          <img src={featuredWork[2].image} alt={featuredWork[2].alt} />
        </Link>
        <Link to="/about" className="profile-bento__about">
          <span className="profile-card-head"><span>About Jason</span><ArrowUpRight size={19} /></span>
          <strong>I run what I build.</strong>
          <p>A Cebu-based builder working where CRM, automation, and operations meet.</p>
        </Link>
        <Link to="/services" className="profile-bento__services">
          <span className="profile-card-head"><span>What I do</span><ArrowUpRight size={19} /></span>
          <ul>
            <li>CRM architecture <span>01</span></li>
            <li>Automation <span>02</span></li>
            <li>Reporting <span>03</span></li>
          </ul>
        </Link>
        <Link to="/contact" className="profile-bento__contact">
          <span className="profile-card-head"><span>Next step</span><ArrowUpRight size={19} /></span>
          <strong>Tell me where the handoff breaks.</strong>
          <span className="profile-link">Book a 30-minute call <ArrowUpRight size={18} /></span>
        </Link>
      </div>
    </section>
  )
}
