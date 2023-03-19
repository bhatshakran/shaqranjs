import React from 'react';
import bannerimg from '../assets/portfo.png';

const Banner: React.FC = () => {
  return (
    <section className='mt-36 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 lg:px-0 gap-y-6'>
      <div className=''>
        <h2 className=' hidden md:flex md:text-[40px]  lg:text-[48px] font-poppins font-bold text-primary max-w-[650px]  flex-col'>
          <span>Hello, I'm</span>
          <span>Shaqran Bhat,</span>
          <span>
            a <span className='text-secondary w-full'>Front End Developer</span>
          </span>
        </h2>

        <h2 className='  text-center md:hidden text-[32px]   font-poppins font-bold text-primary '>
          Hello, I'm Shaqran Bhat, a{' '}
          <span className='text-secondary'>Front End Developer</span>
        </h2>

        <div className='text-center md:text-left'>
          <a
            href='https://drive.google.com/file/d/1B-FOcP-kr493X8DSdGwdfHHkT0TdH-ie/view?usp=share_link'
            target='_blank'
            className='text-base font-poppins mt-4 inline-flex items-center gap-1'
          >
            Download Resume{' '}
            <svg
              width='106'
              height='1'
              viewBox='0 0 106 1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line y1='0.5' x2='106' y2='0.5' stroke='#282828' />
            </svg>
          </a>
        </div>
      </div>

      <div className=''>
        <img
          src={bannerimg}
          alt=''
          className=' w-full xs:max-w-[250px] lg:max-w-[350px]'
        />
      </div>
    </section>
  );
};

export default Banner;
