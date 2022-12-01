import React from "react";
import ServiceEach from "./ServiceEach";
import img1 from "../../assets/images/fluoride.png";
import img2 from "../../assets/images/cavity.png";
import img3 from "../../assets/images/whitening.png";

const Service = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: img1,
      decription:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: img2,
      decription:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: img3,
      decription:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <div className="mt-28 mb-20 text-center">
        <h3 className="text-2xl font-bold uppercase text-primary">
          Our Services
        </h3>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="mx-12 grid grid-cols-3 gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceEach key={service._id} service={service}></ServiceEach>
        ))}
      </div>
    </div>
  );
};

export default Service;
