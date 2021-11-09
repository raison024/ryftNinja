import React from 'react'
import './page3.css'
import Button from '@material-ui/core/Button';


function page3() {
    return (
        <div className="page3">
            <header className="page3-header">
                <p className="column page3-title">
                Stay secure with an Unlimited VPN plan
                <p className="page3-content">
                Includes all ryftNinja apps, priority customer support,
                and unlimited data.</p></p>
                <div className="cardrow">
                    <div className="dock d1">
                        <div className="discount"><p>Save 10%</p></div>                  
                        <p className="year1">1-Year</p>
                        <p style={{fontSize: '3.5vmin', fontWeight: 'bold', color: '#555', margin: '0.5vmin'}}>$4.99
                        <span style={{fontSize: '2.5vmin',fontWeight: 'normal', color: '#888888'}}>/mo</span></p>
                        <p style={{fontSize: '1.8vmin', fontWeight: 'bold', color: '#555', margin: '0.5vmin'}}>$59.88 billed annually</p>
                        <Button
                        onClick={() => { alert('Payment Servers are down ;)') }} 
                        variant="contained" className="dockbutton"
                        style={{ margin: '2vmin', fontSize: '1.5vmin', 
                        backgroundColor: '#1f1f1f', color: '#fff', fontWeight: 'bold'}}>
                        Select
                        </Button>
                    </div>
                    <div className="dock d2">
                    <div className="discount2"><p>Save 67%</p></div> 
                    <p className="year2">3-Year</p>
                        <p style={{fontSize: '4vmin', fontWeight: 'bold', color: 'blueviolet', margin: '1vmin'}}>$3.33
                        <span style={{fontSize: '2.5vmin',fontWeight: 'normal', color: '#888888'}}>/mo</span></p>
                        <p style={{fontSize: '2vmin', fontWeight: 'bold', color: '#ddd', margin: '1vmin'}}>$120 billed annually</p>
                            <Button 
                            onClick={() => { alert('Payment Servers are down ;)') }} 
                            variant="contained" className="dockbutton"
                            style={{ margin: '2vmin', fontSize: '1.8vmin', 
                            backgroundColor: 'blueviolet', color: '#fff', fontWeight: 'bold'}}>
                            Select
                            </Button>
                        
                    </div>
                    <div className="dock d1">
                    <div className="discount"><p>Save 58%</p></div> 
                    <p className="year1">2-Year</p>
                        <p style={{fontSize: '3.5vmin', fontWeight: 'bold', color: '#555', margin: '0.5vmin'}}>$4.17
                        <span style={{fontSize: '2.5vmin',fontWeight: 'normal', color: '#888888'}}>/mo</span></p>
                        <p style={{fontSize: '1.8vmin', fontWeight: 'bold', color: '#555', margin: '0.5vmin'}}>$99.99 billed annually</p>
                            <Button 
                            onClick={() => { alert('Payment Servers are down ;)') }} 
                            variant="contained" className="dockbutton"
                            style={{ margin: '2vmin', fontSize: '1.5vmin', 
                            backgroundColor: '#1f1f1f', color: '#fff', fontWeight: 'bold'}}>
                            Select
                            </Button>
                    
                    </div>
                </div>
            </header>
        </div>
    )
}
 
export default page3
