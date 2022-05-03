import React,{useRef,useState} from "react";
import emailjs from "emailjs-com"
import "./contact.css";

export const Contact = () => {
    const [done ,setDone] = useState(false)
    const form = useRef();

	function sendEmail(e){
		e.preventDefault();

		emailjs.sendForm('service_qq1v59e' , 'template_nqstejk', e.target, '_6YQox5SHEiYQ14wb')
		  .then((result) => {
			  console.log(result.text);
			  setDone(!done)
		  }, (error) => {
			  console.log(error.text);
		  });
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
				{
                 done && <p className="thanks">הפרטים נשלחו בהצלחה נחזור בהקדם!</p>   
				}
				</form>
			</div>
		</div>
	);
};
