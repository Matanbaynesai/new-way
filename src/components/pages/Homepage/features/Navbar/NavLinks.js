import React from 'react';
import {Link} from "react-scroll";
import classes from './navbar.module.css';


function NavLinks() {
    return (
        <ul className={classes.NavLinks}>
        <li><Link to="contact" spy={true} smooth={true} offset={100} duration={500}>יצירת קשר</Link></li>
        <li><Link to="questions" spy={true} smooth={true} offset={-150} duration={500}>שאלות/תשובות</Link></li>
        <li><Link to="service" spy={true} smooth={true} offset={600} duration={500}>שירותים</Link></li>
        <li><Link to="service" spy={true} smooth={true} offset={-100} duration={500}>דף הבית</Link> </li>
        <li><img className="bdi" src="bdilogo.png"/></li>
      </ul>
    );
}

export default NavLinks;