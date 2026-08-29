import link from '../assets/link.png';
import { certifications } from '../data/certifications';
import { skillCategories } from '../data/skills';

const securityArsenal = [
    {
        name: "Kali Linux",
        description: "Security-focused Linux distribution used for cybersecurity learning and testing.",
        icon: "🐧",
    },
    {
        name: "Nmap",
        description: "Network discovery and security auditing.",
        icon: "🔍",
    },
    {
        name: "Burp Suite",
        description: "Web application security testing.",
        icon: "🕷️",
    },
    {
        name: "Wireshark",
        description: "Network protocol and packet analysis.",
        icon: "📡",
    },
];

const SkillPage = () => {
    return (
        <div className="skillpage">
            <div className="skillpage-title">
                <span className="section-label">SKILLS</span>
                <h1>Security &amp; Certifications</h1>
                <h3>Hands-on security tools, verified certifications, and continuous learning</h3>
            </div>

            <div className="security-arsenal">
                <div className="section-header">
                    <span className="section-label">SECURITY ARSENAL</span>
                    <h2 className="section-title">Security Tools</h2>
                </div>
                <div className="arsenal-grid">
                    {securityArsenal.map((tool, index) => (
                        <div key={index} className="arsenal-card">
                            <span className="arsenal-icon">{tool.icon}</span>
                            <div className="arsenal-info">
                                <h4>{tool.name}</h4>
                                <p>{tool.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skillpage-skills">
                <div className="section-header">
                    <span className="section-label">CAPABILITIES</span>
                    <h2 className="section-title">Technical Skillset</h2>
                </div>
                <div className="skillpage-skills-content">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-card-top">
                                <img src={category.icon} alt={category.title} />
                                <h4>{category.title}</h4>
                            </div>
                            <div className="skill-chips">
                                {category.items.map((item, idx) => (
                                    <span key={idx}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skillpage-certificate">
                <div className="skillpage-certificate-heading">
                    <div className="section-header">
                        <span className="section-label">VALIDATION</span>
                        <h2 className="section-title">Certifications</h2>
                    </div>
                    <div className="scroll-indicator">
                        <span>Swipe</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="skillpage-certificate-content">
                    {certifications.map((cert) => (
                        <div key={cert.id} className='cer-box'>
                            <div className='cer-head'>
                                <h3>{cert.title}</h3>
                                <h4>{cert.issuer}</h4>
                            </div>
                            {cert.link ? (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className='cer-btn'>
                                    <p>View Credentials</p>
                                    <img src={link} alt="" />
                                </a>
                            ) : (
                                <div className='cer-btn cer-btn-disabled'>
                                    <p>In Progress</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillPage;