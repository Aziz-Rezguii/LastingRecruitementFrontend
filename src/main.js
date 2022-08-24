
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/FindWork'
import Footer from './components/Footer'

const Main = () => {
    return (
        <div className='Main' id='Main'>    
      <Navbar />
      <Hero />
      <About />
      <Demo />
      <Footer />
        </div>
    )
}

export default Main

