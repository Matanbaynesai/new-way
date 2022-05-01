import React from 'react';
import "./home.css";
import { Contact } from './features/Contact/Contact';
import { Content } from './features/Content/Content';
import { Footer } from './features/Footer/Footer';
import { Header } from './features/Header/Header';
import { NavBar } from './features/Navbar/NavBar';
import { Process } from './features/Process/Process';
import { Questions } from './features/Questions/Questions';

export const Home = () => {
  
  return (
    <div>
        <div className="chat">
              <a href="https://api.whatsapp.com/send?phone=972524011321">
              <img className="whatsapp" src="data:image/png;base64,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" alt="" />
              <p>דברו איתנו בוואטסאפ</p>
              </a>
            </div>
      <NavBar />
      <Header id="service"/>
      <Content id="service"/>
      <Process id="process"/>
      <Questions id="questions"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  )
}