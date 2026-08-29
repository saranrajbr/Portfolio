import { NavLink } from 'react-router-dom'
import profile from '../assets/p.png'
import Home from '../assets/Homegreen.png'
import Project from '../assets/Projectgreen.png'
import Contact from '../assets/Contactgreen.png'
import Skill from '../assets/Skillgreen.png'
import resume from '../assets/resume_saran_raj_b_r.png'

const SideNav = () => {
    return (
        <div className="sidenav">
            <div className="Namehead">
                <img src={profile} alt="Profile" className="profile-img" />
                <div className='names'>
                    <h1 className="name">Saran Raj</h1>
                    <h3 className='subname'>Cybersecurity Student</h3>
                </div>
            </div>
            <div className="navitems">
                <NavLink to="/" end className={({ isActive }) => isActive ? "navHome active" : "navHome"}>
                    <img src={Home} alt="Home" />
                    <p>Home</p>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "navProject active" : "navProject"}>
                    <img src={Project} alt="Project" />
                    <p>Projects</p>
                </NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? "navSkill active" : "navSkill"}>
                    <img src={Skill} alt="Skill" />
                    <p>Skills</p>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "navContact active" : "navContact"}>
                    <img src={Contact} alt="Contact" />
                    <p>Contact</p>
                </NavLink>
            </div>
            <a
                href={resume}
                download="Saran_Raj_B_R_Resume.png"
                className="nav-resume-btn"
                aria-label="Download Resume"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <p>Resume</p>
            </a>
        </div>
    )
}

export default SideNav;
