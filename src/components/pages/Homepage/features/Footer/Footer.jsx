import React from "react";
import {BsInstagram} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";

import "./footer.css";

export const Footer = () => {
	return (
		<div className="f-container">
			<div className="footer-content">
      <div className="social-icons">
        <img className="icon facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" alt="" />
      </div>
      <div className="bdi-logo">
				<img className="bdi-img" src="./pnlogo.png" alt="" />
      </div>
      <div className="social-icons">
      <img src="https://clipart.info/images/ccovers/1559063342instagram-icon-with-text-logo-png.png" className="icon instegram"/>
      </div>
			</div>
      <div className="line">
        <div>Copyright ©Matan B Design&Develop 2022.</div>
      </div>
		</div>
	);
};
