import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinmentImg from '../../assets/images/appointment.png'
import { Link } from "react-router-dom";

const MakeAppoinment = () => {
    return (
        <section className="mt-24" style={{
        background: `url(${appoinmentImg})`
    }}>
      <div className="flex items-center mx-12">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={doctor} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-xl text-primary font-bold">Appoinment</h3>
          <h2 className="text-3xl text-white">Make an appointment Today</h2>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to='/appointment' className="btn w-32 border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
