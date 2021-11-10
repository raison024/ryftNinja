import React from 'react';
import './page4.css'
import Button from '@material-ui/core/Button'
import Logo from '../../logo.svg'
import Logo01 from '../../assets/Logo01.png';
import Logo02 from '../../assets/Logo02.png';
import {Instagram, GitHub, LinkedIn, Send} from '@material-ui/icons'
import emailjs from 'emailjs-com'; 

function page4() {
    const instaclick = () => {
        window.open("https://www.instagram.com/raison024?r=nametag");
      };
    const githubclick = () => {
        window.open("https://github.com/raison024");
      };
    const linkedinclick = () => {
        window.open("https://www.linkedin.com/in/raison-sabu-57b90421b/");
      };

      function sendEmail(e) {
        e.preventDefault();    
    
        emailjs.sendForm('service_i5rnsy8', 'template_80y5muq', e.target, 'user_GBniWAJrj6kd0Q59Erre8')
          .then((result) => {
              window.location.reload()  
              alert('Thank you for your response.');
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
            <div className="page4">
            <header className="page4-header">
             <div className="box b1 column">
                 <img src={Logo02} className="page4-logo"/>
                 <div className="row">
                    <Button
                    onClick={instaclick}
                    style={{color: '#fff'}}
                    startIcon={<Instagram style={{height: '4.5vh', width: '4.5vh'}}/>}></Button>
                    
                    <Button 
                    onClick={githubclick}
                    style={{color: '#fff'}}
                    startIcon={<GitHub style={{height: '4.5vh', width: '4.5vh'}}/>}></Button>
                     
                    <Button
                    onClick={linkedinclick}
                    style={{color: '#fff'}}
                    startIcon={<LinkedIn style={{height: '4.5vh', width: '4.5vh'}}/>}></Button>
                 </div>       
                    

             </div>
             <div className="box b2 column">
                <form onSubmit={sendEmail} className="column">
                    <p style={{fontSize: '3.2vmin', color: 'black', 
                    fontWeight: 'bold', marginBottom: '1vmin', marginTop: '1.5vh'}}>
                    Contact Us</p>

                    <p className="inputtext">Email</p>
                    <input type="text" className="inputfield" name="from_email"/>
                    <p className="inputtext">Message</p>
                    <input type="text" className="inputfield2" name="message"/>
                    <input type="submit" value="Submit" className="submitbutton"/>
                </form>
            </div>
            </header>
            </div>
    )
};

export default page4;
    
