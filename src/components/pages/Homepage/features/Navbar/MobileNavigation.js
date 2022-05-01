import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import Aos from "aos";

function MobileNavigation() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	const HamburgerIcon = (
		<CgMenuRound
			className={classes.Hamburger}
			size="40px"
			color="white"
			data-aos="zoom-in-up"
			onClick={() => setOpen(!open)}
		/>
	);
	const CloseIcon = (
		<CgCloseO
			className={classes.Hamburger}
			size="40px"
			color="white"
			data-aos="zoom-in-up"
			onClick={() => setOpen(!open)}
		/>
	);
	return (
		<nav className={classes.MobileNavigation}>
			{open ? CloseIcon : HamburgerIcon}
			{open ? <NavLinks data-aos="fade-left" /> : ""}
            {/* <img className="bdi" src="bdilogo.png"/> */}
		</nav>
	);
}

export default MobileNavigation;
