import React from 'react';
import './Footer.css';
import Codepen from '../../assets/socials/codepen-logo-white.png';
import GitHub from '../../assets/socials/GitHub_Invertocat_White.png';
import LinkedIn from '../../assets/socials/InBug-White.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <ul>
                    <li className="social-linkedin"><a href="https://www.linkedin.com/in/renate-roke/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={LinkedIn} alt="Ga naar Renate's LinkedIn" />
                    </a></li>
                    <li className="social-github"><a href="https://github.com/RenateRoke" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={GitHub} alt="Ga naar Renate's GitHub" />
                    </a></li>
                    <li className="social-codepen"><a href="https://codepen.io/RenateRoke" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={Codepen} alt="Ga naar Renate's CodePen" />
                    </a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;