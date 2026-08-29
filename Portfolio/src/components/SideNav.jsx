import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile from '../assets/p.png'
import resume from '../assets/resume_saran_raj_b_r.png'

const SideNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="topnav">
            <div className="topnav-inner">
                <NavLink to="/" end className="topnav-brand" onClick={closeMenu}>
                    <img src={profile} alt="Profile" className="topnav-brand-img" />
                    <div className="topnav-brand-text">
                        <span className="topnav-brand-name">Saran Raj</span>
                        <span className="topnav-brand-sub">Cybersecurity Student</span>
                    </div>
                </NavLink>

                <div className={`topnav-links ${menuOpen ? 'topnav-links-open' : ''}`}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'topnav-link topnav-link-active' : 'topnav-link'}
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'topnav-link topnav-link-active' : 'topnav-link'}
                        onClick={closeMenu}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) => isActive ? 'topnav-link topnav-link-active' : 'topnav-link'}
                        onClick={closeMenu}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'topnav-link topnav-link-active' : 'topnav-link'}
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </div>

                <div className="topnav-actions">
                    <a
                        href={resume}
                        download="Saran_Raj_B_R_Resume.png"
                        className="topnav-resume-btn"
                        aria-label="Download Resume"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Resume</span>
                    </a>
                    <button
                        className="topnav-toggle"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default SideNav
