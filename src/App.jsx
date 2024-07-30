import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Me from './components/Me/hero.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Myportfolio from './components/myportfolio/myportfolio.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Me/>
      <About/>
      <Services/>
      <Myportfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
