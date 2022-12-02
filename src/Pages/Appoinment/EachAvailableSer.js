import React from "react";

const EachAvailableSer = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600">Try Another Date</span>
          )}
        </p>
        <p>
          Available Slots: {slots.length}{" "}
          {slots.length > 1 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableSer;
