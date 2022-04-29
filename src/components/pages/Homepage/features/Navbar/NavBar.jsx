import React,{useState} from 'react';
import {Link} from "react-scroll";
import './navbar.css';

export const NavBar = () => {
  const [toggle,setToggle] = useState(false);

  function openManu(){
    setToggle(!toggle);
  }
  return (
    <div className="n-container">
      <div className="nav-logo">
            <img className="logo" src="./bdilogo.png" alt="" />
        </div>
        <div  className="manu">
        <span className="nav-item">
          <Link to="contact" spy={true} smooth={true} offset={100} duration={500}>יצירת קשר</Link>
          </span>
        <span className="nav-item">
          <Link to="questions" spy={true} smooth={true} offset={-150} duration={500}>שאלות/תשובות</Link>
          </span>
        <span className="nav-item">
          <Link to="service" spy={true} smooth={true} offset={600} duration={500}>שירותים</Link>
          </span>
        <span className="nav-item">
          <Link to="service" spy={true} smooth={true} offset={-100} duration={500}>דף הבית</Link>
          </span>
        </div>
    </div>
  )
}
