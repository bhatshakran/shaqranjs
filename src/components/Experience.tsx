import React from 'react';
import experience from '../assets/experience.png';

const Experience: React.FC = () => {
  return (
    <section className='w-full mb-40 px-8 lg:px-0'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center  gap-y-16 lg:px-0 w-full  gap-x-16'>
        <div className=' lg:w-1/2 font-poppins'>
          <h2 className='text-[30px] font-poppins font-bold text-primary'>
            Experience
          </h2>

          <div className=' bg-white p-4 text-primary mt-6 shadow-sm'>
            <h3 className='font-bold text-lg text-secondary '>Homejam </h3>
            <p className='text-sm mt-2'>
              I worked on the team responsible for developing the frontend side
              of the platform. We used Nextjs, Strapi(CMS) and Postgres to build
              the application.
            </p>
            <p className='text-sm mt-2'>Duration: 3 months</p>
          </div>
          <div className='bg-white p-4 text-primary mt-6 shadow-sm'>
            <h3 className='font-bold text-lg text-secondary '>Zivaka LLP </h3>
            <p className='text-sm mt-2'>
              I worked solo to build a website for a construction company. I
              used plain HTML, CSS and vanilla js to develop the whole site.
            </p>
            <p className='text-sm mt-2'>Duration: 1.5 months</p>
          </div>
        </div>
        <div className='lg:w-1/2  '>
          <div className='max-w-[250px] bg-creme xs:w-full sm:max-w-[400px] flex items-center justify-center rounded-3xl shadow-md p-8 '>
            <img
              src={experience}
              alt=''
              className='w-[180px] h-[180px] sm:max-w-[220px] sm:max-h-[220px] 2xl:max-w-[300px] 2xl:max-h-[300px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
