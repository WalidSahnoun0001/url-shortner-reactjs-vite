import React from 'react'
import './navbar.css'

function Navbar({toggle, setToggle}) {
  return (
    <header>
        <img src="images/logo.svg" alt="" />
        <div className="menu" onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <div className={`navbar-links ${toggle ? 'open': ''} `}>
           <nav>
              <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Resources</a></li>
              </ul>
            </nav>
            <div className="links">
              <div><a href="#" className="login">Login</a></div>
              <div><a href="#" className="signup">Signup</a></div>
            </div>
          </div>
    </header>
  )
}

export default Navbar