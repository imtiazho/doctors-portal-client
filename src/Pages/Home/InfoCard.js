import React from "react";

const InfoCard = ({ img, color, title }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl ${color} p-5 text-white`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
