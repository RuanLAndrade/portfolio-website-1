import React from 'react'
import { About, Contact, Experience, Footer, Header, Navbar, Portfolio, Services, Testimonials} from './components';
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App