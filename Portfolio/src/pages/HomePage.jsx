import Pic from '../assets/mypic.png';
import Pentest from '../assets/testicon.png';
import Web from '../assets/devicon.png';

const HomePage = () => {
    return (
        <div className="homepage-content">
            <div className="home-header">
                <h1>MY PORTFOLIO</h1>
                <h2>View of My Life</h2>
            </div>
            <div className="homepage-body">
                <div className="homepage-leftpage">
                    <div className="homepage-leftpage-title">
                        <p className='welcome'>WELCOME GUYS</p>
                        <div className='homepage-leftpage-name'>
                            <p className='im'>I'm </p><p className='homepage-name'>Saran Raj B R</p>
                        </div>
                        <div className='homepage-leftpage-role'>
                            <div className='homepage-leftpage-line'></div><p>CyberSecurity Enthusiast</p>
                        </div>
                        <div className='homepage-leftpage-about'>
                            <p>I’m a cybersecurity student dedicated to understanding both how systems are attacked and how they are defended. I actively build and test in controlled lab environments to sharpen my skills in network analysis, vulnerability assessment, reconnaissance, and web security fundamentals. Working with tools like Nmap and Wireshark has strengthened my technical base, but I focus just as much on developing the mindset behind security thinking critically, identifying weak points, and approaching problems with structured analysis. I believe real expertise comes from consistent hands on practice, not just theoretical knowledge.</p>
                        </div>
                        <div className='homepage-card'>
                            <div className='homepage-card-penetration'>
                                <div>
                                    <img src={Pentest} alt="Pentest Icon" className='pentest-icon' />
                                </div>

                                <h2>Penetration Testing</h2>
                                <p>Specializing in ethical hacking and security assessments focused on identifying vulnerabilities in web applications, networks, and systems using industry-standard methodologies and structured testing frameworks.</p>
                            </div>
                            <div className='homepage-card-web'>
                                <div>
                                    <img src={Web} alt="Web Icon" className='web-icon' />
                                </div>

                                <h2>Web - Development</h2>
                                <p>Specializing in building secure, scalable web applications with modern technologies, emphasizing clean architecture, performance optimization, and security-first development practices.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-rightpage">
                    <img src={Pic} alt="My Pic" className="home-pic" />
                </div>
            </div>
            <div className='homepage-footer'>
                <div className='homepage-footer-text'>
                    <p>Alongside cybersecurity, I build full-stack web applications using React, Node.js, Express, and MongoDB, where I prioritize clean architecture and secure design principles. I enjoy transforming ideas into practical, working systems while ensuring performance and security go hand in hand. For me, development and security are not separate paths — they complement each other. My long-term goal is to become a cybersecurity professional who can ethically break systems to understand their weaknesses, build robust applications from the ground up, and design defenses that stand strong in real-world environments.</p>
                </div>
                <div className='homepage-footer-quote'>
                    <div className='homepage-footer-line'></div><p>“ Continuous learning shapes my perspective of the world.“</p>
                </div>
            </div>


        </div>
    )
}

export default HomePage;