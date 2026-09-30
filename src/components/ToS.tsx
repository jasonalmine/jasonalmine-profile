import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()
  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button className="legal-page__back" onClick={() => navigate('/')} aria-label="Back to home">
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>
        <h1 className="legal-page__title">Terms of Service</h1>
        <div className="legal-page__body">
          <h2>Current terms</h2>
          <p>This profile links to my published work. Read the <a href="https://www.jasonalmine.com/terms-of-service">current terms of service</a> on the main portfolio.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
      </div>
    </main>
  )
}
