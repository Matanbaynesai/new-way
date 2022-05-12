import React, { useEffect } from "react";
import "./content.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Content = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="c-container">
			<div className="boxes-wrapper">
				<div className="tighter">
					<div data-aos="fade-up" className="box">
						<i className="bi bi-cash-stack"></i>
						<h3 className="desc">מחיקת נתונים שליליים</h3>
						<p className="paragraph">
							ביצוע בדיקה מקיפה של ה-BDI וסלילת דרך לקראת BDI חיובי.
						</p>
					</div>
					<div data-aos="fade-right" className="box">
						<i className="bi bi-hourglass-bottom"></i>
						<h3 className="desc">תיקוני מידע</h3>
						<p className="paragraph">
							לעיתים המידע הקיים אצל הרשויות הוא לא העדכני ביותר - בדיוק את זה
							הצוות שלנו יודע לתקן ובכך לשפר לכם את הדירוג.
						</p>
					</div>
					<div data-aos="fade-left" className="box">
						<i className="bi bi-person-check-fill"></i>
						<h3 className="desc">שיפור נתוני אשראי</h3>
						<p className="paragraph">
							צוות המומחים שלנו יעזור לכם להתנהל בצורה חכמה יותר על מנת לשפר את
							נתוני האשראי.
						</p>
					</div>
				</div>
			</div>
			<div className="rate-container">
				<div className="content-wrapper">
					<div data-aos="fade-right" className="thinking">
						<img
							className="thinking-img"
							src="https://www.pikpng.com/pngl/b/49-495628_open-thinking-man-cartoon-png-clipart.png"
							alt=""
						/>
					</div>
					<div data-aos="fade-down" className="content">
						<div data-aos="fade-up" className="headline">
							<h1>
								לא נותנים לכם הלוואה ? <br/> אל תדאגו, צוות המומחים שלנו יעזור לכם
								למצוא פתרון.
							</h1>
						</div>
						<div className="rate">
							<p className="about">
								לפני שנתיים הייתי בעל עסק ובעקבות הקורונה והסגר היה לי החזר של
								שלושה הוראות קבע ושתי שיקים.. הייתה תקופה קשה שבה הבנק חסם לי את
								כל כרטיסי האשראי וסגר לי את מסגרת האשראי בחשבון. עברו מאז שנתיים
								שבהם התנהלתי ממש תקין בחשבון ללא שום חריגות וביקשתי מהבנק להחזיר
								לי את המסגרות האשראי גם לכרטיסים וגם למסגרת בחשבון, הבנק ביקש
								למשוך את הbdi שלי, אישרתי והבנק אמר לי שהדוח bdi לא תקין ולכן הם
								לא יכולים לפתוח לי מסגרות אשראי שאלתי את הבנקאית מה אני כן יכול
								לעשות ? הבנקאית אמרה לי שאני צריך לפנות לאיזה חברה שתתקן לי את
								הדירוג, נכנסתי לגוגל חיפשתי שאלתי קיבלתי הצעות מחיר שאלתי עורכי
								דין בנושא, למדתי את הנושא הכי לעומק שאפשר. ואני יחד עם עורך דין
								(קרוב משפחה שלי) תיקנו לי את הדירוג ומחקתי לי את הנתונים השלילים
								(שלא יהיה בדוח את ההחזרות שיקים והוראות קבע) שבוע אחרי התיקון
								התקשרתי שוב לבנק ביקשו ממני שוב למשוך את הדוח. ובפלא נתנו לי את
								כל המסגרות האשראי שביקשתי. ובנוסף לזה הלוואה שהיתה לי בבנק (בנק
								מזרחי ) שהיתה בריבית 6 " איימתי ״ על הבנק שאעבור לבנק אחר ונתנו
								לי את אותו הלוואה ללא ריבית!! כאן אני נכנס לסיפר של כל אחד ואחד
								לתקן לו את ה bdi ולמחוק נתונים שלילים.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
