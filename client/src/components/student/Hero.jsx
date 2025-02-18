import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-200 to-white">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto" aria-label="Level Up Your Knowledge with Expert-Led Courses">
        Level Up Your Knowledge with <span className="text-cyan-600">Expert-Led Courses.</span>
        {assets.sketch && (
          <img 
            src={assets.sketch} 
            alt="Decorative Sketch" 
            className="hidden md:block absolute md:-bottom-7 md:right-0 sm:-bottom-5 sm:right-2"
          />
        )}
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
