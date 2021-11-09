import React from 'react';
import './footer.css';

function footer() {
    return (
        <div className="footer">
            <header className="footer-header">
            <div className="coolumn">
                <p className="Title">FEATURES</p>
                    <div className="Stuff">
                        <p>VPN Servers</p>
                        <p>VPN for Streaming</p>
                        <p>Secure Core VPN</p>
                        <p>Getting Started</p>
                    </div>
            </div>
            <div className="coolumn">
                <p className="Title">PLATFORMS</p>
                    <div className="Stuff">
                        <p>VPN for Windows</p>
                        <p>VPN for Mac</p>
                        <p>VPN for Android</p>
                        <p>VPN for IOS</p>
            </div>  </div>
            <div className="coolumn">
                <p className="Title">COMPANY</p>
                    <div className="Stuff">
                        <p>About</p>
                        <p>Support</p>
                        <p>Careers</p>
                        <p>Open Source</p>
                    </div>   
            </div>
            <div className="coolumn">
                <p className="Title">SOCIAL</p>
                    <div className="Stuff">
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>GitHub</p>
                        <p>LinkedIn</p>
                    </div>   
            </div>
            <div className="coolumn">
                <p className="Title">CONTACT</p>
                    <div className="Stuff">
                        <p>rae024@gmail.com</p>
                        <p>+101 25442325</p>
                        <p>FAQ</p>
                        <p>Report</p>
                    </div>   
            </div>
            </header>
        </div>
    )
};

export default footer;