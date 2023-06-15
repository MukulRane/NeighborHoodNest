import React from "react";
import "./Card.css";

const Card = ({ title, subtitle, description }) => {
  const isDiscount = description.includes("10% off");
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <p className={`card-description ${isDiscount ? "green" : ""}`}>
        {description}
      </p>
    </div>
  );
};

export default Card;
