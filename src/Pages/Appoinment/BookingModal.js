import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const phoneNumber = e.target.phone.value;
    const fotmatedDate = format(date, "PP");

    const bookingData = {
      treatmentId: _id,
      treatmentName: name,
      date: fotmatedDate,
      slot: slot,
      patient: user?.displayName,
      patientEmail: user?.email,
      patinentNumber: phoneNumber,
    };

    // Send Data to Database
    fetch("http://localhost:5000/bookings", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appoinment is set, ${fotmatedDate} at ${slot}`);
        } else {
          toast.error(
            `You have an appoinment on ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg w-full text-secondary text-center">
            Booking for {name}
          </h3>

          <form
            onSubmit={handleBooking}
            className="flex flex-col gap-4 items-center mt-4"
          >
            <input
              type="text"
              name="date"
              readOnly
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />

            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="name"
              readOnly
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
