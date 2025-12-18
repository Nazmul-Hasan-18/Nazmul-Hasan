import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Service from './service/Service';
import Project from './project/Project';
import Contact from './contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;