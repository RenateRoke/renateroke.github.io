import React from 'react';

const SkipLink = () => {
    function handleSkipLinkClick(event) {
        event.preventDefault();
        const mainContent = document.getElementById('content');
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
        }  
    }     
    return (
        <a href="#content" onClick={handleSkipLinkClick}>
            Direct naar content
        </a>
    );
}

export default SkipLink;