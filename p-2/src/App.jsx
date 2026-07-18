import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const project=[
    {
      name: "kavach",
      description: "perform basic security testing of web applications"
    },
    {
      name:"campnav",
      description: "campus navigation system for visually impaired people"
    },
    {
      name:"portfolio",
      description: "personal portfolio website"
    }
  ]
  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects projects={project} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
