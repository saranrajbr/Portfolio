import contact from '../assets/Contactgreen.png';
import phone from '../assets/phone.png';
import location from '../assets/location.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import tryhackme from '../assets/tryhackme.png';
const ContactPage = () => {
    return (
        <div className="contactpage">
            <div className="contactpage-leftside">
                <div className="contactpage-leftside-heading">
                    <h2>Get in Touch</h2>
                    <p>Have a web application, security challenge, or vulnerability to analyze? Let’s work together to identify risks and strengthen digital defenses.</p>
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
