const soloProjects = [
    {
        id: 1,
        category: "NETWORK SECURITY",
        title: "Automated Vulnerability Scanner",
        description: "Custom Python-based tool that automates Nmap scans and cross-references results with CVE databases to identify critical infrastructure flaws.",
        tags: ["Python", "Nmap API", "CVE-Search"]
    },
    {
        id: 2,
        category: "WEB DEVELOPMENT",
        title: "E-Commerce Secure Platform",
        description: "A full-stack e-commerce site with JWT authentication, role-based access control, and seamless Stripe payment integration.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        id: 3,
        category: "CLOUD INFRASTRUCTURE",
        title: "AWS Serverless API",
        description: "Designed a serverless backend using AWS Lambda and API Gateway for a mobile application, optimizing performance and reducing costs.",
        tags: ["AWS Lambda", "DynamoDB", "Node.js"]
    },
    {
        id: 4,
        category: "MALWARE ANALYSIS",
        title: "Sandbox Environment Setup",
        description: "Created an isolated virtualized environment for safely executing and analyzing the behavior of suspicious executables and ransomware.",
        tags: ["VirtualBox", "Wireshark", "Sysinternals"]
    },
    {
        id: 5,
        category: "FRONTEND DEV",
        title: "Interactive Admin Dashboard",
        description: "Developed a responsive admin dashboard featuring real-time data visualization using Chart.js and complex data table management.",
        tags: ["React", "Chart.js", "TailwindCSS"]
    },
    {
        id: 6,
        category: "CRYPTOGRAPHY",
        title: "End-to-End Chat App",
        description: "Built a secure real-time chat application implementing AES-256 encryption for messages to ensure total privacy between users.",
        tags: ["Socket.io", "React", "CryptoJS"]
    }
];

const teamProjects = [
    {
        id: 1,
        category: "ENTERPRISE SOFTWARE",
        title: "Healthcare Record System",
        description: "Collaborated on a scalable patient record management system, focusing on HIPAA compliance, secure data storage, and audit logging.",
        tags: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 2,
        category: "GAME DEVELOPMENT",
        title: "Multiplayer Survival Game",
        description: "Co-developed an online multiplayer survival game using Unity and C#, handling client-side prediction and server reconciliation.",
        tags: ["Unity", "C#", "Photon PUN"]
    },
    {
        id: 3,
        category: "MOBILE APP",
        title: "Fitness Tracking Protocol",
        description: "Team built an iOS and Android compatible fitness app that tracks user workouts, diet, and shares progress with a community feed.",
        tags: ["React Native", "Firebase", "Redux"]
    },
    {
        id: 4,
        category: "AI & MACHINE LEARNING",
        title: "Phishing Detection Model",
        description: "Trained a machine learning model to classify emails as phishing or legitimate based on structural features and NLP analysis.",
        tags: ["Python", "Scikit-Learn", "Pandas"]
    },
    {
        id: 5,
        category: "DEVOPS",
        title: "CI/CD Pipeline Automation",
        description: "Refactored a legacy project's deployment strategy by introducing Docker containers and GitHub Actions for continuous integration.",
        tags: ["Docker", "GitHub Actions", "Nginx"]
    },
    {
        id: 6,
        category: "BLOCKCHAIN",
        title: "Decentralized Voting DApp",
        description: "Developed smart contracts on Ethereum for a tamper-proof voting system with a Next.js frontend interacting via Web3.js.",
        tags: ["Solidity", "Next.js", "Web3.js"]
    }
];

const ProjectPage = () => {
    return (
        <div className="projectpage">
            <div className="projectpage-title">
                <h2>MY PORTFOLIO</h2>
                <h1>Projects On Different Fields</h1>
                <h3>A showcase of technical expertise in full stack development and Ethical Hacking</h3>
            </div>
            <div className="projectpage-solo">
                <div className="projectpage-solo-title">
                    <div className="solo-project"><h2>Solo Projects</h2></div>
                    <div className="scroll-indicator">
                        <span>Swipe</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="projectpage-solo-content">
                    {soloProjects.map((project) => (
                        <div key={`solo-${project.id}`} className="project-card">
                            <div className="project-img-container">
                                <div className="project-category">{project.category}</div>
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <span className="view-case-study">VIEW CASE STUDY &rarr;</span>
                                    <span className="project-links">&lt; &gt;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="projectpage-team">
                <div className="projectpage-team-title">
                    <div className="team-project"><h2>Team Projects</h2></div>
                    <div className="scroll-indicator">
                        <span>Swipe</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="projectpage-team-content">
                    {teamProjects.map((project) => (
                        <div key={`team-${project.id}`} className="project-card">
                            <div className="project-img-container">
                                <div className="project-category">{project.category}</div>
                            </div>
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <span className="view-case-study">VIEW CASE STUDY &rarr;</span>
                                    <span className="project-links">&lt; &gt;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProjectPage;
