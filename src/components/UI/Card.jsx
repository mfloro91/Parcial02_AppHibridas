import React from "react";
import Button from "./Button";

const Card = ({ title, description, cta, children }) => {
  return (
    <div className="card" style={{
        width: "250px",
        fontSize: "0.95rem",
        padding: "12px",
        boxSizing: "border-box",
        margin: "0.5em",
      }}>
      {children}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Button text={cta} variant="success">  </Button>
      </div>
    </div>
  );
}
export default Card;
