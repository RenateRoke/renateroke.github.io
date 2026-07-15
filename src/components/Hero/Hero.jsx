import React from 'react';
import './Hero.css';
import Silhouette from '../../assets/images/silhouette.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text" id="hero-text">
                <hgroup>
                <h1>hoi! ik ben <span className="highlight">Renate</span>.</h1>
                <p>ik werk aan een <span className="highlight">toegankelijk</span> web.</p>
                </hgroup>
            </div>
            <div className="hero-image">
                <img src={Silhouette} alt="Kleurrijk silhouette van Renate Roke"/>
            </div>
        </div>
    )

}

export default Hero;