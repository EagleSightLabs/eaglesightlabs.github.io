import React from 'react';
import config from '@/config.json';

const Footer = () => {
    return (
        <footer
            aria-label="Site Info"
            className="d-flex flex-column justify-content-center text-muted flex-lg-row justify-content-lg-between align-items-lg-center pb-lg-3"
        >
            <p>
                © <time>{new Date().getFullYear()}</time>{' '}
                <a href={`https://twitter.com/${config.xUsername}`}>
                    {config.title}
                </a>
                . Some rights reserved.
            </p>
            {/* ... other footer content ... */}
        </footer>
    );
};

export default Footer;
