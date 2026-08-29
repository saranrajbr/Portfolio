import contact from '../assets/Contactgreen.png';
import phone from '../assets/phone.png';
import location from '../assets/location.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import tryhackme from '../assets/tryhackme.png';
import resume from '../assets/resume_saran_raj_b_r.png';

const ContactPage = () => {
    return (
        <div className="contactpage">
            <div className="contactpage-leftside">
                <div className="contactpage-leftside-heading">
                    <h2>Let's Connect</h2>
                    <p>Interested in cybersecurity, security research, AI, or building useful technology? Let's connect.</p>
                </div>
                <div className="contactpage-leftside-content">
                    <div className='contactpage-leftside-content-email'>
                        <div className='contactpage-img'>
                            <img src={contact} alt='email'></img>
                        </div>
                        <div>
                            <h4>EMAIL</h4>
                            <p>saranrajbr63@gmail.com</p>
                        </div>
                    </div>
                    <div className='contactpage-leftside-content-phone'>
                        <div className='contactpage-img'>
                            <img src={phone} alt='phone'></img>
                        </div>
                        <div>
                            <h4>PHONE</h4>
                            <p>+91 7826809233</p>
                        </div>
                    </div>
                    <div className='contactpage-leftside-content-location'>
                        <div className='contactpage-img'>
                            <img src={location} alt='location'></img>
                        </div>
                        <div>
                            <h4>LOCATION</h4>
                            <p>Chennai, India</p>
                        </div>
                    </div>
                </div>
                <a
                    href={resume}
                    download="Saran_Raj_B_R_Resume.png"
                    className="contact-resume-btn"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                </a>
            </div>
            <div className="contactpage-rightside">
                <div className="contactpage-rightside-heading">
                    <h3>Social Media</h3>
                </div>
                <div className="contactpage-rightside-content">
                    <a href="https://www.linkedin.com/in/saran-raj-b-r-04913932b" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt='linkedin'></img>
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/saranrajbr" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt='github'></img>
                        <p>GitHub</p>
                    </a>
                    <a href="https://x.com/saranrajbr" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt='twitter'></img>
                        <p>Twitter</p>
                    </a>
                    <a href="https://www.instagram.com/saranrajbr" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='instagram'></img>
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.facebook.com/share/1CSRrVkdzi/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt='facebook'></img>
                        <p>Facebook</p>
                    </a>
                    <a href="https://tryhackme.com/p/saranrajbr" target="_blank" rel="noopener noreferrer">
                        <img src={tryhackme} alt='tryhackme'></img>
                        <p>TryHackMe</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
