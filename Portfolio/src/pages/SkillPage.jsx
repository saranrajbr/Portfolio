import program from '../assets/program.png';
import web from '../assets/webdev.png';
import cyber from '../assets/cs.png';
import tools from '../assets/tool.png';
import database from '../assets/devicon.png';
import adt from '../assets/adt.png';
import api from '../assets/api.png';
import csp from '../assets/csp.png';
import cui from '../assets/cui.png';
import fed from '../assets/fed.png';
import lfct from '../assets/lfct.png';
import mdb from '../assets/mdb.png';
import pwjs from '../assets/pwjs.png';
import link from '../assets/link.png';
const SkillPage = () => {
    return (
        <div className="skillpage">
            <div className="skillpage-skills">
                <div className="skillpage-skills-heading">
                    <h3>CAPABILITIES</h3>
                    <h2>Technical Skillset</h2>
                </div>
                <div className="skillpage-skills-content">
                    <div>
                        <h4>Programming Languages</h4>
                        <img src={program} alt="Programming Languages" />
                        <ul>
                            <li>Python</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>C</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Web Development</h4>
                        <img src={web} alt="Web Development" />
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Cybersecurity</h4>
                        <img src={cyber} alt="Cybersecurity" />
                        <ul>
                            <li>Passive Reconnaissance</li>
                            <li>Active Reconnaissance</li>
                            <li>Dorks</li>
                            <li>IDOR</li>
                            <li>Local File Inclusion</li>
                            <li>Remote File Inclusion</li>
                            <li>XSS Payloads</li>
                            <li>SQL Injection</li>
                            <li>Command-line Injection</li>
                            <li>SSRF</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Database Management</h4>
                        <img src={database} alt="Database Management" />
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Supabase</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Tools</h4>
                        <img src={tools} alt="Tools" />
                        <ul>
                            <li>Burp Suite</li>
                            <li>DNSDumpster</li>
                            <li>Shodan</li>
                            <li>Gobuster</li>
                            <li>FFUF</li>
                            <li>ASNLookup</li>
                            <li>Whois</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="skillpage-certificate">
                <div className="skillpage-certificate-heading">
                    <div className="heading-wrapper">
                        <h3>VALIDATION</h3>
                        <h2>Certifications</h2>
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
                    <div className='cer-box'>
                        <img src={csp} alt="" />
                        <div className='cer-head'>
                            <h3>Certified Security Professional</h3>
                            <h4>Edureka</h4>
                        </div>
                        <a href='https://www.edureka.co/certificates/mycertificate/47f998361d1cf42de4570bfd9ea300b5' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={lfct} alt="" />
                        <div className='cer-head'>
                            <h3>Linux Fundamentals Certificate</h3>
                            <h4>Edureka</h4>
                        </div>
                        <a href="https://www.edureka.co/certificates/mycertificate/9536340bba3bf39eb035c0c4723921ae" className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={adt} alt="" />
                        <div className='cer-head'>
                            <h3>Advanced Drone Technology</h3>
                            <h4>AI Robo infinity</h4>
                        </div>
                        <a href='https://www.linkedin.com/in/saran-raj-b-r-04913932b' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={api} alt="" />
                        <div className='cer-head'>
                            <h3>API Integration</h3>
                            <h4>Board infinity</h4>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/records/T3W0U30DDYN7' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={cui} alt="" />
                        <div className='cer-head'>
                            <h3>Crafting User Interface</h3>
                            <h4>Board infinity</h4>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/records/N2XOXS5UQ915' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={fed} alt="" />
                        <div className='cer-head'>
                            <h3>Front-End Development</h3>
                            <h4>Meta</h4>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/records/PCYY9SQCMIAG' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={mdb} alt="" />
                        <div className='cer-head'>
                            <h3> Management Database</h3>
                            <h4>Board infinity</h4>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/records/4ZNIDOEMLL42' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                    <div className='cer-box'>
                        <img src={pwjs} alt="" />
                        <div className='cer-head'>
                            <h3>Programming with JavaScript</h3>
                            <h4>Meta</h4>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/records/R3YJQ0HY66KE' className='cer-btn'>
                            <p>View Credentials</p>
                            <img src={link} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillPage;
