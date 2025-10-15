import { useState } from 'react'
import LandingPage from './Pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default App
