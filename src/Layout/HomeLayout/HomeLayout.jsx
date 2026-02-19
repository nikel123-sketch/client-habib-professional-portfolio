import React from 'react';
import Banner from '../../pages/HomePage/Banner';
import About from '../../pages/HomePage/About';
import Experience from '../../pages/HomePage/Experience';
import Skills from '../../pages/HomePage/Skills';
import Education from '../../pages/HomePage/Education';
import Contact from '../../pages/HomePage/Contact';

const HomeLayout = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Experience></Experience>
           <Skills></Skills>
           <Education></Education>
           <Contact></Contact>
        </div>
    );
};

export default HomeLayout;