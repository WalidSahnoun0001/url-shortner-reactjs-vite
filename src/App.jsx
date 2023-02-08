import { useState } from 'react'
import './App.css'
import Boost from './components/Boost/Boost'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Shortner from './components/ShortnerBox/Shortner'
import Statistics from './components/Statistics/Statistics'

function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Hero />
      <section className="bg-box">
        <Shortner />
        <Statistics />
      </section>
      <Boost />
      <Footer />
    </>
  )
}

export default App
