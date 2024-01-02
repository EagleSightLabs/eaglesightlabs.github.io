import React from 'react';
import config from '@/config.json';

const Sidebar = () => {
    return (
        <aside
            aria-label="Sidebar"
            id="sidebar"
            className="d-flex flex-column align-items-end"
        >
            {/* ... other sidebar content ... */}
            <div className="sidebar-bottom d-flex flex-wrap align-items-center w-100">
                {config.facebookUsername && (
                    <a
                        href={`https://facebook.com/${config.facebookUsername}`}
                        aria-label="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                )}
                {/* ... similar conditional rendering for other social media icons ... */}
            </div>
        </aside>
    );
};

export default Sidebar;
