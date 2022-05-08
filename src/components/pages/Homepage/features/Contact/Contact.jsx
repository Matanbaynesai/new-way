import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { BsStarFill } from "react-icons/bs";

export const Contact = () => {
	const [done, setDone] = useState(false);
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_qq1v59e",
				"template_nqstejk",
				e.target,
				"_6YQox5SHEiYQ14wb"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(!done);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	return (
		<div id="contact" className="c-container">
			<div className="form-wrapper">
				<h1 className="form-headline"> ? רוצים עוד מידע </h1>
				<h4>!השאירו פרטים ונחזור אליכם</h4>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="user_name" placeholder="שם פרטי" />
					<input type="text" name="last_name" placeholder="שם משפחה" />
					<input type="tel" name="number" placeholder="מספר טלפון" />
					<button className="form-btn">שלח</button>
					{done && <p className="thanks">הפרטים נשלחו בהצלחה נחזור בהקדם!</p>}
				</form>
			</div>	
			<div className="stars-wrapper">
				<div className="star-box">
					<div className="stars">
						<BsStarFill color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill size="1.8em" color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill color="yellow" />
					</div>
					<p className="text">
						לאחר הטיפול והמחיקה אנחנו גם נעזור לכם בניהול פיננסי תקין כדי שלא
						תגיעו שוב למצב כזה או דומה.
					</p>
				</div>
				<div className="star-box">
					<div className="stars">
						<BsStarFill color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill size="1.8em" color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill color="yellow" />
					</div>
					<p className="text">
						אנחנו נדאג שיהיה לכם כמה שפחות תעסוקה ומינימום זמן טיפול.
					</p>
				</div>
				<div className="star-box">
					<div className="stars">
						<BsStarFill color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill size="1.8em" color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill color="yellow" />
					</div>
					<p className="text">
						המחיר שלנו ידוע מראש והוא הכי זול שתקבלו . במידה וקיבלתם הצעה זולה
						יותר אנחנו מתחייבים לעשות את לכם את התיקון במחיר נמוך יותר מההצעה
						שקיבלתם והתשלום רק לאחר התיקון כמובן .
					</p>
				</div>
				<div className="star-box">
					<div className="stars">
						<BsStarFill color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill size="1.8em" color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill color="yellow" />
					</div>
					<p className="text">
						אנחנו כאן בשבילכם לדאוג לכם זה מה שיש נגד עינינו.
					</p>
				</div>
				<div className="star-box">
					<div className="stars">
						<BsStarFill color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill size="1.8em" color="yellow" />
						<BsStarFill size="1.3em" color="yellow" />
						<BsStarFill color="yellow" />
					</div>
					<p className="text">
						נעשה איתכם יעוץ לאחר מכן ובמידה וישנם גם הלוואות תקבלו ריביות יותר
						טובות על אותו הלוואה או שתקבלו מסגרות אשראי יותר טובות.
					</p>
				</div>
			</div>
			
		</div>
	);
};
