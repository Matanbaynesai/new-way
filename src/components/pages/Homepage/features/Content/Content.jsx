import React,{useEffect} from 'react';
import "./content.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Aos from "aos";
import "aos/dist/aos.css";

export const Content = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    
  return (
    <div className="c-container">
        <div className="boxes-wrapper">
            <div className="tighter">
            <div data-aos="fade-up" className="box">
               <i className="bi bi-cash-stack"></i>
                <h3 className="desc">מחיקת נתונים שליליים</h3>
                <p className="paragraph">ביצוע בדיקה מקיפה של ה-BDI וסלילת דרך לקראת BDI חיובי.</p>
            </div>
            <div data-aos="fade-right" className="box">
            <i className="bi bi-hourglass-bottom"></i>
                <h3 className="desc">תיקוני מידע</h3>
                <p className="paragraph">לעיתים המידע הקיים אצל הרשויות הוא לא העדכני ביותר - בדיוק את זה הצוות שלנו יודע לתקן ובכך לשפר לכם את הדירוג.</p>
            </div>
            <div data-aos="fade-left" className="box">
            <i className="bi bi-person-check-fill"></i>
                <h3 className="desc">שיפור נתוני אשראי</h3>
                <p className="paragraph">צוות המומחים שלנו יעזור לכם להתנהל בצורה חכמה יותר על מנת לשפר את נתוני האשראי.</p>
            </div>
        </div>
            </div>
        <div className="rate-container">
        <div className="content-wrapper">
        <div data-aos="fade-right" className="thinking">
            <img className="thinking-img" src="https://www.pikpng.com/pngl/b/49-495628_open-thinking-man-cartoon-png-clipart.png" alt="" />
        </div>
        <div data-aos="fade-down" className="content">
        <div data-aos="fade-up" className="headline">
            <h1>לא נותנים לכם הלוואה? אל תדאגו, צוות המומחים שלנו יעזור לכם למצוא פתרון.</h1>
        </div>
            <h4 data-aos="fade-down">כאן תוכלו להעריך מהו דירוג האשראי שלכם</h4>
            <div className="rate">
            <img className="graph-img" src="./graph.jpeg" alt="" />
            </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}
