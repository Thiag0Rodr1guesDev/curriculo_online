import './App.css'
import About from './components/About'
import CodeBlock from './components/CodeBlock'
import Contact from './components/Contact'
import Education from './components/Education'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <Intro />
      <CodeBlock />
      <ExperienceSection />
      <Education />
      <Skills />
      <About/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
