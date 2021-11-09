import React from 'react'
import './page2.css';
import Security from '../../assets/pg1img.png'

function page2() {
    return (
        <div className="page2">
            <header className="page2-header">
                
                <img src={Security} className="page2-logo" />
                
                <p className="page2-title">Keep your data safe from prying<br/>eyes
                <p className="page2-content"><br/>Ultimate Security<br/>
                <p className="page2-content2">Our VPN safeguards your connection with next-generation<br/>
                encryption, so you can log into your accounts, make bank<br/>transfers, and shop online without worries. Even on unprotected Wi-Fi.
                </p>
                <br/>No Logs Policy<br/>
                <p className="page2-content2">
                It's nobody's business what you do online. That's why we don't<br/>
                track, collect, or share your private data. We couldn't provide any<br/>
                details about you to third parties, even if they ask.
                </p>
                </p>
                </p>
                    
            </header>
        </div>
    )
}

export default page2
