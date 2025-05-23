import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, icon, alt, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <button className="service-card" onClick={handleClick}>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">
        <img 
          src={icon} 
          alt={alt} 
          className="icono" 
        />
        <br />
        {title}
        <p>{description}</p>
      </span>
    </button>
  );
};

export default ServiceCard;
