import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, dagig, decription, img } = testimonial;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{decription}</p>
        <div className="flex gap-6 mt-8 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>

          <div>
            <h4>{name}</h4>
            <p>{dagig}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
