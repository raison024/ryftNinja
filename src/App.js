import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import './components/page1/page1';
import Page1 from './components/page1/page1';
import Page2 from './components/page2/page2';
import Page21 from './components/page2/page21';
import Page3 from './components/page3/page3';
import Page4 from './components/page4/page4';
import Footer from './components/footer/footer';
import Logo from './logo.svg';
import Logo01 from './assets/Logo01.png';
import Logo02 from './assets/Logo02.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="nav">
      <div className="leftnav">
      <Link to="/">
      <img src={Logo02} className="Logo" />
      </Link>
      <Link className="ryftnav" to="/">
      <p>ryftNinja</p>
      </Link>
      </div>
      <div className="rightnav">
      <Link className="navbutton" to="/">
      Home
      </Link>
      <Link className="navbutton" to="/Services">
      Services
      </Link>
      <Link className="navbutton navbutton2" to="/Signup">
      Contact
      </Link> 
      </div>
      </div>
      <div>
        
        <Switch>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div className="App">
    <header className="App-header">
     <Page1 />
     <Page2 />
     <Page21 />
     <Page3 />
     <Page4 />
     <Footer />
    </header>    
    </div>
  )
    }
function Services() {
  return ( 
  <Page3 />
  )
  }

function SignUp(){
  return (
    <Page4 />
    )
  
}
    


