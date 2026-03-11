import { Routes, Route } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import SkillPage from './pages/SkillPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app-container">
      <SideNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
