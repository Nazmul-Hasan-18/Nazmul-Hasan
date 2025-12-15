import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Service from './service/Service';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;