import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
