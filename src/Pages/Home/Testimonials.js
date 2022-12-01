import React from "react";
import peop1 from "../../assets/images/people1.png";
import peop2 from "../../assets/images/people2.png";
import peop3 from "../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      dagig: "California",
      img: peop1,
      decription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      dagig: "California",
      img: peop2,
      decription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      dagig: "California",
      img: peop3,
      decription:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mx-12">
      <div className="mt-28 mb-16">
        <h3 className="text-xl text-primary font-bold">Testimonial</h3>
        <h2 className="text-3xl">What Our Patients Says</h2>
      </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {
                  testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id}></TestimonialCard>)
              }
      </div>
    </div>
  );
};

export default Testimonials;
