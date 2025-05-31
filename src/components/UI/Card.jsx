import React from "react";
import Button from "./Button";

const Card = ({ title, description, image, cta }) => {
  return (
    <div className="card" style={{
        width: "250px",
        fontSize: "0.95rem",
        padding: "12px",
        boxSizing: "border-box"
      }}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button text={cta} variant="success"> </Button>
      </div>
    </div>
  );
}
export default Card;
