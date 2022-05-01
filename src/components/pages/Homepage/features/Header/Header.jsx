import React, { useEffect } from "react";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div id="service" className="h-container">
			<div class="custom-shape-divider-bottom-1649334521">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
		<div className="somthing">

			<div className="headline-header">
				<h1 data-aos="fade-up">
					? קיבלתם דחייה מהבנק
					<br /> מאיתנו תקבלו מענה
				</h1>
				<p className="header-desc" data-aos="slide-left ">
					ניו וואי מסייעת לכם בשיפור דירוג האשראי ומעבר מחיווי אשראי שלילי
					לחיובי תוך מתן ייעוץ פיננסי מקצועי מהמומחים שלנו. יחד נדאג להוביל אתכם
					יד ביד אל עבר חוף מבטחים פיננסי ביעילות ובמהירות
				</p>
			</div>
			<div className="video-wrapper">
				<div className="video">
					<iframe
						className="main-video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/CLTEO3Z5bJ8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						aut
					></iframe>
				</div>
			</div>
		</div>
		</div>
	);
};
