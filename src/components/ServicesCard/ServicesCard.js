import React from "react";
import { useNavigate } from 'react-router-dom';
import homeService from "../../images/Services/service-maintenance-worker-repairing.jpg";

import "./ServicesCard.css";

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
        <ServicesCard key={index} imageSrc={`${homeService}`} title={card.categoryName} description={'8 service providers'} price={'start $1203'}/>
        // <ServicesCard key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} price={cards.price}/>
      ))}
    </div>
  );
};

export default ServiceCardGrid;
