import React from 'react';
import classes from './navbar.module.css';
import NavLinks from './NavLinks';

function Navigation() {
    return (
        <nav className={classes.Navigation}>
            <NavLinks/>
           {/* <img className="bdi" src="bdilogo.png"/> */}
        </nav>
    );
}

export default Navigation;