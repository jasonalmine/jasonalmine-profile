import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from '@/components/Home'
import ProjectsView from '@/views/ProjectsView'
import ServicesView from '@/views/ServicesView'
import AboutGrid from '@/components/AboutGrid'
import ContactGrid from '@/components/ContactGrid'
import NotFound from '@/components/NotFound'
import { restorePerfTier } from '@/lib/perf'
import { restorePrefs } from '@/lib/a11y'
import './styles/tokens.css'
import './styles/global.css'
import './styles/theme-glyph.css'
import './styles/sections.css'
import './styles/extensions.css'
import './styles/shell.css'
import './styles/rail.css'
import './styles/home.css'
import './styles/bento.css'
import './styles/mobile-app.css'
import './styles/a11y.css'
import './styles/apple.css'
import './styles/mobile-pass.css'
import './styles/perf.css'
import './styles/profile.css'

restorePerfTier()
restorePrefs()

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<ProjectsView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/about" element={<AboutGrid />} />
            <Route path="/contact" element={<ContactGrid />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
