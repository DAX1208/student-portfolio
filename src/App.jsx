import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const skillList = ['React', 'JavaScript', 'CSS', 'Vite', 'HTML']
const projectList = [
  { title: 'Portfolio Site', description: 'A responsive student portfolio built with React and Vite.' },
  { title: 'Course Dashboard', description: 'A course summary page showing study progress and resources.' },
  { title: 'UI Component Library', description: 'Reusable React components for modern frontend projects.' },
]

function App() {
  return (
    <div className="app-shell">
      <Header name="Student Name" themeColor="#1e90ff" />
      <main className="main-content">
        <About />
        <Skills skillList={skillList} />
        <Projects projects={projectList} />
      </main>
      <Footer />
    </div>
  )
}

export default App
