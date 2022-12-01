import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-4'>
            <InfoCard title='Opening Hours' img={clock} color='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard title='Visit our location' img={marker} color='bg-neutral'></InfoCard>
            <InfoCard title='Contact us now' img={phone} color='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;