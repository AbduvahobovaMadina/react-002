import { useState } from 'react'

import './sass/main.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Product from './components/product/Product'
import Clean from './components/clean/Clean'
import Testimonial from './components/testimonial/Testimonial'
import Popular from './components/popular/Popular'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Product/>
      <Clean/>
      <Testimonial/>
      <Popular/>
      <Footer/>
    </>
  )
}

export default App
