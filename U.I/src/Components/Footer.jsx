import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h2 className="footer-logo">
                    <span className="logo-mark">E</span> <span className="logo-text">Commerce
                    </span>
                </h2>
                <p>Welcome to Hotel Mellow, where comfort meets tranquility. Nestled in the heart of a bustling city, our hotel offers a peaceful retreat for both.</p>
                <div className="social-icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaYoutube />
                </div>
            </div>

            <div className="footer-section">
                <h3 className="footer-title">Feedback Form</h3>
                <p>Give me the feedack for customer revies</p>
                <input type="text" placeholder="Your Name" className='searchBox' />
                <input type="email" placeholder="Your email" className='searchBox'/>
                <input type="text" placeholder="Your Text..." className='searchBox'/>
                <button>Submit</button>
            </div>

            <div className="footer-section">
                <h3 className="footer-title">Our Info</h3>
                <p><FaMapMarkerAlt className="icon" /> Mellow Hotel & Resort<br />123 Serenity Avenue<br />Tranquil City, Peaceful State<br />Relaxingland</p>
                <p><FaPhoneAlt className="icon" /> +666 333 9999, +444 777 666</p>
                <p><FaEnvelope className="icon" /> Yourdomain@Email.Com</p>
            </div>
        </footer>
    );
};

export default Footer;
