import React from "react";
import { useNavigate } from 'react-router-dom';

import "./ServicesCard.css";
import ServiceProviderPage from "../../pages/ServiceProviderPage/ServiceProviderPage";

const ServicesCard = ({ imageSrc, title, description, price }) => {
    const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/serviceProviders'); // Replace '/your-path' with the actual path you want to navigate to
  };

  return (
    <div className="service-card" onClick={handleCardClick}>
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

const ServiceCardGrid = ({ cards }) => {
  return (
    <div className="service-card-grid">
      {cards.map((card, index) => (
        <ServicesCard key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} price={cards.price}/>
      ))}
    </div>
  );
};

export default ServiceCardGrid;
