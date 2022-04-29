import React, { useEffect } from "react";
import "./process.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Process = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="p-container">
		<div class="custom-shape-divider-top-1649339473">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
			<div className="progress-wrapper">
      {/* <div className="headline-wrapper">
				<h1 className="headline">התהליך הוא כזה</h1>
			</div> */}
        <div data-aos="flip-up" className="progress-bar">
          <div className="icon">Some Icon</div>
          <div className="sub-headline">
          <h1>1</h1> 
          <h2 className="headline-card">Headline</h2>
          <p className="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repudiandae.</p>
          </div>
        </div>
        <div data-aos="flip-right" className="progress-bar">
          <div className="icon">Some Icon</div>
          <div className="sub-headline">
          <h1>2</h1> 
          <h2 className="headline-card">Headline</h2>
          <p className="text-card">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ea!</p>
          </div>
        </div>
        <div data-aos="flip-left" className="progress-bar">
          <div className="icon">Some Icon</div>
          <div className="sub-headline">
          <h1>3</h1> 
          <h2 className="headline-card">Headline</h2>
          <p className="text-card"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus.</p>
          </div>
        </div>
        <div data-aos="fade-down" className="progress-bar">
          <div className="icon">Some Icon</div>
          <div className="sub-headline">
          <h1>4</h1> 
          <h2 className="headline-card">Headline</h2>
          <p className="text-card"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam.</p>
          </div>
        </div>
      </div>
		</div>
	);
};
