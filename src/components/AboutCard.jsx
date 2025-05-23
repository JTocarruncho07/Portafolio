import React from 'react';
import '../styles/AboutCard.css';

const AboutCard = ({ language, description, icon }) => {
  return (
    <div className="about-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <div className="card-content">
        <h3>{language}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
