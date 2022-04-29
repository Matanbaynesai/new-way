import React from "react";
import "./footer.css";

export const Footer = () => {
	return (
		<div className="f-container">
			<div className="footer-content">
      <div className="social-icons">
        <p>facebook</p> 
        <p>facebook</p> 
        <p>facebook</p> 
      </div>
      <div className="bdi-logo">
				<img className="bdi-img" src="./bdilogo.png" alt="" />
      </div>
      <div className="social-icons">
        <p>instegram</p> 
        <p>instegram</p> 
        <p>instegram</p> 
      </div>
			</div>
      <div className="line">
        <div>copy rights</div>
        <div>copy rights</div>
        <div>copy rights</div>
      </div>
		</div>
	);
};
