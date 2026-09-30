import { ArrowUpRight } from '@/components/slab'
import { featuredWork } from '@/data/projects'

export default function ProjectsView() {
  return (
    <section className="profile-page profile-work" aria-labelledby="work-title">
      <header className="profile-pagehead">
        <p className="profile-kicker">Selected work</p>
        <h1 id="work-title">Systems people use.<br /><em>Evidence you can inspect.</em></h1>
        <p>These projects show the build, the operating context, and the result. Each links to the full case study on my main site.</p>
      </header>
      <div className="profile-work__list">
        {featuredWork.map((project, index) => (
          <a className="profile-work__row" key={project.slug} href={`https://www.jasonalmine.com/work#${project.slug}`} target="_blank" rel="noopener noreferrer">
            <div className="profile-work__image"><img src={project.image} alt={project.alt} loading={index > 0 ? 'lazy' : 'eager'} /></div>
            <div className="profile-work__body">
              <span className="profile-kicker">{String(index + 1).padStart(2, '0')} / {project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <span className="profile-work__proof">{project.proof}</span>
              <span className="profile-link">Read the case study <ArrowUpRight size={18} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
