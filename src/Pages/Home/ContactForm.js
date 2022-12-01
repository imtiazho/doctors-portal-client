import React from "react";
import contactBg from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div
      style={{
        background: `url(${contactBg})`,
      }}
      className="my-28"
    >
      <div className="mx-12 p-12">
        <div className="text-center mb-12">
          <h3 className="text-xl text-primary font-bold">Contact Us</h3>
          <h2 className="text-3xl text-white">Stay connected with us</h2>
        </div>

        <form className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-1/2 max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-1/2 max-w-xs"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="input w-1/2 max-w-xs"
          />
          <input type="submit" value="SUBMIT" className="btn border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
