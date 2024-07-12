// Navbar.jsx
import logo from "../assets/digvijayprofile.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import styles from './Navbar.module.css'; 
import { SiLeetcode } from "react-icons/si"; 

const Navbar = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="mb-20 flex flex-col items-center justify-between py-6 sm:flex-row">
      <div className="flex flex-col items-center">
        <img src={logo} className="w-24 h-24" alt="Logo" />
        <p className={styles.customFont}>Integrity Dedication Excellence</p>
      </div>

      <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/digvijay-singh-a31369272/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Digvijay78" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
          <FaEnvelope onClick={scrollToContact}  style={{cursor : "pointer"}} />
       
        <a href="https://www.instagram.com/reallydivi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://leetcode.com/u/digvijaybestfootballer/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
