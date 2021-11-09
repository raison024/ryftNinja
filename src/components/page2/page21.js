import React from 'react'
import './page21.css';
import Security from '../../assets/security1.png'
import { Android, LaptopMac, Apple, Tv} from '@material-ui/icons';


function page21() {
    return (
        <div className="page21">
        <header className="page21-header">
            <p className="page21-title">Enjoy fast and stable connection<br/>anywhere
            <p className="page21-content"><br/>No Bandwidth Limits<br/>
            <p className="page21-content2">There are no speed limits at our end. Enjoy your full speed VPN<br/>
            connection without any throttling.
            </p>
            <br/>Works on all devices<br/>
            <p className="page21-content2">
            Our VPN is compatible with all popular platforms, including<br/>
            Windows, MacOS, Linux, Android and IOS. Besides you can<br/>
            secure upto 6 devices with a single account, including your smart TV and router.
            </p>
            Available on: <br/>
            <Android className="ico"/>
            <Apple className="ico" />
            <LaptopMac className="ico" />
            <Tv className="ico" />
            </p>
            </p>
            <img src={Security} className="page21-logo" />    
        </header>
    </div>
    
    )
}

export default page21
