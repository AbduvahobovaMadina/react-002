import { useState } from 'react'

import './sass/main.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}

export default App