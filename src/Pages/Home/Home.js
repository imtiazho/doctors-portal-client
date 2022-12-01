import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Service from './Service';
import Footer from './Shared/Footer';
import ShortIntro from './ShortIntro';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <ShortIntro></ShortIntro>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;