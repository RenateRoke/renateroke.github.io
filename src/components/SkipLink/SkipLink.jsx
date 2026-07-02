import React from 'react';
import { useLocation } from 'react-router-dom';

const SkipLink = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const targetID = isHomePage ? 'hero-text' : 'main-heading';

    function handleSkipLinkClick(event) {
        event.preventDefault();
        const mainHeading = document.querySelector('main h1');
        const heroText = document.querySelector('.hero-text');
        if (location.pathname !== '/') {
            mainHeading.setAttribute('tabindex', '-1');
            mainHeading.focus();
            
        }
        if (isHomePage) {
                heroText.setAttribute('tabindex', '-1');
                setTimeout(() => {
                    heroText.focus();
                }, 100);
            ;
            
        }
    }
    return (
        <a href={`#${targetID}`} onClick={handleSkipLinkClick}>
            Direct naar content
        </a>
    );
}

export default SkipLink;