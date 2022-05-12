import React,{useState} from 'react';
import MobileNavigation from './MobileNavigation';
import classes from './navbar.module.css';
import Navigation from './Navigation';

export const NavBar = () => {
  const [toggle,setToggle] = useState(false);

  function openManu(){
    setToggle(!toggle);
  }
  return (
    <div className={classes.NavBar}>
      <MobileNavigation/>
      <Navigation/>
      <img width={200} height={100} className="bdi-logo" src="pnlogo.png"/>
      
    </div>
  )
}
