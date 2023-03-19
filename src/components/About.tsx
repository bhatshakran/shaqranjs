import React from 'react';
import me from '../assets/me.png';

const About: React.FC = () => {
  return (
    <section className='my-40 px-8 lg:px-0'>
      <h2 className='text-[30px] w-full text-right font-bold font-poppins text-primary'>
        About
      </h2>
      <div className='flex flex-col  lg:flex-row w-full items-center mt-8 gap-y-8'>
        <div className='w-full lg:w-1/2 max-h-[400px] overflow-hidden flex justify-start '>
          <img src={me} alt='' className=' h-[400px]  ' />
        </div>

        <div className='w-full lg:w-1/2  font-poppins text-sm lg:text-lg text-primary leading-6 lg:leading-7 bg-creme p-8 shadow-md'>
          <p>
            Hi, I am Shaqran Bhat from India. I am a fullstack developer but
            frontend is my primary concern. My tech stack used to be MERNG
            (MongoDB, Express, React, Nodejs, GraphQL) but with the advent of
            fullstack frameworks like Nextjs and Remix , I have switched over to
            these awesome frameworks because of the ease and efficiency they
            offer. My goal is to help people/brands develop clean, efficient and
            mobile first UI's. Also I love animations and WebGL because of the
            flavour they bring to the web! I use GSAP & locomotive scroll for
            animations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
