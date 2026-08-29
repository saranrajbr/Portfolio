import { Link } from 'react-router-dom';
import resume from '../assets/resume_saran_raj_b_r.png';
import { interests, education } from '../data/skills';
import { projects } from '../data/projects';

const focusAreas = [
    {
        icon: '🛡️',
        title: 'Cybersecurity',
        description: 'Network security, web security, and vulnerability assessment through hands-on labs and real-world practice.',
    },
    {
        icon: '🔍',
        title: 'Penetration Testing',
        description: 'Ethical hacking methodologies to identify and exploit vulnerabilities in web applications and networks.',
    },
    {
        icon: '🌐',
        title: 'Web Security',
        description: 'Securing web applications against OWASP Top 10 threats using modern security practices.',
    },
    {
        icon: '📡',
        title: 'SOC Analysis',
        description: 'Security operations, threat detection, incident response, and continuous monitoring.',
    },
];

const stats = [
    {
        value: '5',
        label: 'Projects Built',
    },
    {
        value: '8',
        label: 'Certifications',
    },
    {
        value: '6',
        label: 'Skill Domains',
    },
    {
        value: '10+',
        label: 'Security Tools',
    },
];

const learningTags = [
    'Cybersecurity',
    'Web Security',
    'Penetration Testing',
    'Network Security',
    'AI-Powered Security',
];

const HomePage = () => {
    return (
        <div className="homepage-content">
            <div className="hero-section">
                <div className="hero-left">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        Available for opportunities
                    </div>
                    <p className="hero-role">Cybersecurity Student</p>
                    <h1 className="hero-name">
                        Saran Raj B R
                    </h1>
                    <h2 className="hero-headline">
                        Securing Systems. <br />
                        <span className="hero-headline-accent">Building Intelligent Solutions.</span>
                    </h2>
                    <p className="hero-description">
                        Cybersecurity student focused on network security, web security, penetration testing, and security-focused technology. I also build AI-powered applications and modern web solutions.
                    </p>
                    <div className="hero-ctas">
                        <Link to="/projects" className="hero-cta-primary">
                            Explore My Work
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <a
                            href={resume}
                            download="Saran_Raj_B_R_Resume.png"
                            className="hero-cta-secondary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            View Resume
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/saranrajbr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/saran-raj-b-r-04913932b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="https://tryhackme.com/p/saranrajbr" target="_blank" rel="noopener noreferrer" aria-label="TryHackMe">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="home-stat">
                        <span className="home-stat-value">{stat.value}</span>
                        <span className="home-stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            <div className="about-section">
                <div className="section-header">
                    <span className="section-label">ABOUT ME</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>
                <div className="about-panel">
                    <p className="about-text">
                        Cybersecurity student with a strong interest in network security, web security, and penetration testing. Hands-on experience with security tools and technologies through labs, certifications, and personal projects. Eager to apply my skills and learn in real-world cybersecurity environments.
                    </p>
                    <div className="about-highlights">
                        <span className="about-highlight">Network Security</span>
                        <span className="about-highlight">Web Security</span>
                        <span className="about-highlight">Penetration Testing</span>
                    </div>
                </div>
            </div>

            <div className="focus-section">
                <div className="section-header">
                    <span className="section-label">WHAT I DO</span>
                    <h2 className="section-title">Focus Areas</h2>
                </div>
                <div className="focus-grid">
                    {focusAreas.map((area, index) => (
                        <div key={index} className="focus-card">
                            <span className="focus-card-icon">{area.icon}</span>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="home-projects-preview section-block">
                <div className="section-header">
                    <span className="section-label">PORTFOLIO</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="home-projects-list">
                    {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="home-project-item">
                            <span className="home-project-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="home-project-tags">
                                {project.tags.slice(0, 3).map((tag, idx) => (
                                    <span key={idx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/projects" className="home-view-all">
                    View All Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

            <div className="learning-section">
                <div className="section-header">
                    <span className="section-label">CURRENTLY LEARNING</span>
                    <h2 className="section-title">Growing Every Day</h2>
                </div>
                <div className="learning-tags">
                    {learningTags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="section-block">
                <div className="section-header">
                    <span className="section-label">EDUCATION</span>
                    <h2 className="section-title">Academic Background</h2>
                </div>
                <div className="education-block">
                    {education.map((item) => (
                        <div key={item.id} className="education-item">
                            <div className="education-dot"></div>
                            <div className="education-content">
                                <span className="education-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <p>{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="interests-section">
                <div className="section-header">
                    <span className="section-label">INTERESTS</span>
                    <h2 className="section-title">Areas of Interest</h2>
                </div>
                <div className="interests-tags">
                    {interests.map((interest, index) => (
                        <span key={index} className="interest-tag">{interest}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;
