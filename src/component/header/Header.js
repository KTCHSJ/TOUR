import React from 'react';
import Navbar from '../navbar/Navbar';
import logo from '../../asset/logo2.svg';
import './HeaderStyle.css';
import { FaFacebook, FaLine, FaTiktok, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="hero">
      <div className="header-top">
        <div className="container">
          <a href="tel:" className="helpline-box">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <p className="helpline-title">HOTLINE:</p>
              <p className="helpline-number">0123456789</p>
            </div>
          </a>

          <a href="XX" className="logo">
            <img src={logo} alt="TiewTour" />
          </a>

          <div className="social-icon">
            <a href="https://facebook.com" className="icon"><FaFacebook /></a>
            <a href="https://line.me" className="icon"><FaLine /></a>
            <a href="https://tiktok.com" className="icon"><FaTiktok /></a>
            <a href="https://instagram.com" className="icon"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <Navbar />
      <section className="hero-content" id="home">
      <div className="container">
        <h2 className="h1 hero-title">
          Hello world<br />Welcome to<br/> explore world
        </h2>
        <p className="hero-text">
          เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask 
          เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask 
          เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask เราไม่ทำงาน multitask 
        </p>
      </div>
    </section>
    </header>
  );
};

export default Header;
