// components/Layout.js
import React from 'react';
import themePath from '@/src/themeConfig';

const Header = require(`${themePath}/Header`).default;
const Footer = require(`${themePath}/Footer`).default;

const Layout = ({ children }) => {
    return (
        <div id="main-wrapper" className="d-flex justify-content-center">
            <div className="container d-flex flex-column px-xxl-5">
                <Header />
                <main
                    aria-label="Main Content"
                    className="col-12 col-lg-11 col-xl-9 px-md-4"
                >
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
