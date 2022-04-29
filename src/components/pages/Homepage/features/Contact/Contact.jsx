import React from "react";
import "./contact.css";

export const Contact = () => {
	return (
		<div id="contact" className="c-container">
			<div className="form-wrapper">       
				<h1 className="form-headline"> ? רוצים עוד מידע </h1>
				<h4>!השאירו פרטים ונחזור אליכם</h4>
				<input type="text" placeholder="שם פרטי" />
				<input type="text" placeholder="שם משפחה" />
				<input type="text" placeholder="מספר טלפון" />
				<button className="form-btn">שלח</button>
			</div>
		</div>
	);
};
