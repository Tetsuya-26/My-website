import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FeaturedCategory from './components/FeaturedCategory'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <FeaturedCategory />
    <Footer />
    </>
  )
}

export default App