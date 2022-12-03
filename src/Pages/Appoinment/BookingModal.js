import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null);
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
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="name"
              placeholder="Your Email"
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
