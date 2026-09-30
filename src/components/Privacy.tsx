import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()
  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button className="legal-page__back" onClick={() => navigate('/')} aria-label="Back to home">
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>
        <h1 className="legal-page__title">Privacy Policy</h1>
        <div className="legal-page__body">
          <h2>Current policy</h2>
          <p>This profile is a companion to my main portfolio. Read the <a href="https://www.jasonalmine.com/privacy-policy">current privacy policy</a> for information about contact and booking data.</p>
          <h2>Contact</h2>
          <p>Questions about privacy: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
      </div>
    </main>
  )
}
