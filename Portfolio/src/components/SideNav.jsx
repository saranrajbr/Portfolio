import { NavLink } from 'react-router-dom'
import profile from '../assets/p.png'
import Home from '../assets/Homegreen.png'
import Project from '../assets/Projectgreen.png'
import Contact from '../assets/Contactgreen.png'
import Skill from '../assets/Skillgreen.png'
const SideNav = () => {
    return (
        <div className="sidenav">
            <div className="Namehead">
                <img src={profile} alt="Profile" className="profile-img" />
                <div className='names'>
                    <h1 className="name">Saran Raj</h1>
                    <h3 className='subname'>Ethical hacker</h3>
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
        </div>
    )
}

export default SideNav;