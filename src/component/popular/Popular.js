import React from 'react';
import "./PopularStyle.css"; // Make sure to include the appropriate CSS file
import popular1 from '../../asset/popular-1.jpg';
import popular2 from '../../asset/popular-2.jpg';
import popular3 from '../../asset/popular-3.jpg';

const PopularDestination = () => {
  return (
    <section className="popular" id="destination">
      <div className="container">

        <p className="section-subtitle">Uncover place</p>

        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">
          ไม่อยากทำงานแล้วอยากลาออก! ไม่อยากทำงานแล้วอยากลาออก! 
          ไม่อยากทำงานแล้วอยากลาออก! 
          ไม่อยากทำงานแล้วอยากลาออก!ไม่อยากทำงานแล้วอยากลาออก!
          ไม่อยากทำงานแล้วอยากลาออก! ไม่อยากทำงานแล้วอยากลาออก! ไม่อยากทำงานแล้วอยากลาออก! 
          ไม่อยากทำงานแล้วอยากลาออก!
        </p>
        <br></br>
        <ul className="popular-list">
          <li>
            <PopularCard 
              imgSrc={popular1} 
              country="Name_contry" 
              title="Village" 
              text="DEATAIL บลาๆ DEATAIL บลาๆ DEATAIL บลาๆ DEATAIL บลาๆ DEATAIL บลาๆ " 
            />
          </li>
          <li>
            <PopularCard 
              imgSrc={popular2} 
              country="Name_contry" 
              title="Village" 
              text="DETAIL บลาๆ DETAIL บลาๆDETAIL บลาๆDETAIL บลาๆDETAIL บลาๆDETAIL บลาๆ" 
            />
          </li>
          <li>
            <PopularCard 
              imgSrc={popular3} 
              country="Name_contry" 
              title="Village" 
              text="DETAIL บลาๆ DETAIL บลาๆDETAIL บลาๆDETAIL บลาๆDETAIL บลาๆDETAIL บลาๆ" 
            />
          </li>
        </ul>

        <button className="btn btn-primary">More destination</button>
      </div>
    </section>
  );
}

const PopularCard = ({ imgSrc, country, title, text }) => {
  return (
    <div className="popular-card">
      <figure className="card-img">
        <img src={imgSrc} alt={title} loading="lazy" />
      </figure>
      <div className="card-content">
        {/* ไอคอน */}
        <p className="card-subtitle">
          <a href="x">{country}</a>
        </p>
        <h3 className="h3 card-title">
          <a href="x">{title}</a>
        </h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default PopularDestination;
