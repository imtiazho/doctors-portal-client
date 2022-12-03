import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import EachAvailableSer from "../EachAvailableSer";
import BookingModal from "../BookingModal";

const AvailableAppointment = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className="text-primary text-center text-xl font-bold">
        Available Appointment on {format(date, "PP")}
      </h4>
      <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {services.map((service) => (
          <EachAvailableSer
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></EachAvailableSer>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;