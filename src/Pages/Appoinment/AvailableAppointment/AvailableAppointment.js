import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import EachAvailableSer from "../EachAvailableSer";
import BookingModal from "../BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Home/Shared/Loading";
import { toast } from "react-hot-toast";

const AvailableAppointment = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/avaiable?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  } else if (error) {
    toast.error("An Error is occurred");
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/avaiable?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);

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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
