import React from "react";

const Card = ({ breweryName, breweryStreet, breweryCity, breweryMail }) => {
  return (
    <div className="service-card">
      <h2 className="title">{breweryName}</h2>
      <p>{breweryStreet}</p>
      <p>{breweryCity}</p>
      <a href={breweryMail}>Visit</a>
    </div>
  );
};

export default Card;
