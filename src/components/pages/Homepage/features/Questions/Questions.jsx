import React, { useState, useEffect } from "react";
import "./questions.css";
import { questionsArray } from "../../../../../questions";
import Aos from "aos";
import "aos/dist/aos.css";

export const Questions = () => {
	const [questions, setQuestions] = useState(questionsArray);

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [questions]);

	function handleShow(event) {
		console.log(event.target.id);
		const items = questions;
		const itemId = event.target.id;

		for (let index = 0; index < items.length; index++) {
			if (itemId === questions[index].id) {
				items[index].show = !items[index].show;
				console.log(items);
			}
		}
		setQuestions([...items]);
	}
	return (
		<div id="questions" className="q-container">
      <div className="img-container">
        <img className="ques-mark" data-aos="zoom-out-up" src="https://www.picng.com/upload/question_mark/png_question_mark_52306.png"></img>
        <img className="ques-mark" data-aos="zoom-in-down" src="https://www.picng.com/upload/question_mark/png_question_mark_52306.png"></img>
      </div>
			<div className="q-wrapper">
				{questions.map((item) => {
					return (
						<div data-aos="zoom-in-up" className="questions" key={item.id}>
							<div className="questions-c">
								<button className="q-btn" id={item.id} onClick={handleShow}>
									{item.show ? "-" : "+"}
								</button>
								<h3 key={item.id} className="question">
									{item.question}
								</h3>
							</div>
							<div className="answer">
								{item.show ? (
									<p key={item.id} data-aos="slide-down">
										{item.answer}
									</p>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
      
		</div>
			
	);
};
