import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AboutUsPage from './Pages/AboutUsPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermsOfServicePage from './Pages/TermsOfServicePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
    </Routes>
  )
}

export default App
