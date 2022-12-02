import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='mx-12'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;