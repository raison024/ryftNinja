import React from 'react'
import './page1.css';
import Img from '../../assets/security2.png'

function page1() {
    return (
    <div className="page1">
        <header className="page1-header">
            <div className="page1-row">
            <p className="page1-title">Take back your<br/>Online Privacy with<br/>ryftNinja VPN
            <p className="page1-content"><br/>ryftNinja's easy-to-use VPN app helps you<br/>browse, stream, and work securely from anywhere.</p></p>
            <img src={Img} className="page1-logo"/>
            </div>

    <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
    </div>
        </header>
    </div>    
    )
}

export default page1