import { Background } from './components/Background'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Process } from './components/Process'
import { Work } from './components/Work'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Process />
        <Work />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
