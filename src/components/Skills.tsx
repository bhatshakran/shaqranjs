import React from 'react';
import graph from '../assets/skillsgraph.png';
import reacticon from '../assets/reacticon.png';
import tsicon from '../assets/tsicon.png';
import htmlicon from '../assets/htmlicon.png';
import cssicon from '../assets/cssicon.png';
import dockericon from '../assets/dockericon.png';
import graphicon from '../assets/graphicon.png';
import nexticon from '../assets/nexticon.png';
import giticon from '../assets/giticon.png';

const Skills: React.FC = () => {
  return (
    <section className='mt-40 w-full'>
      <div className='flex   flex-wrap items-center px-8 gap-y-16 lg:px-0 w-full'>
        <div className='lg:w-1/2'>
          <div className='bg-creme max-w-[250px] sm:max-w-[400px] flex items-center justify-center p-8 rounded-3xl shadow-md'>
            <img
              src={graph}
              alt=''
              className='w-[180px] h-[180px] sm:max-w-[220px] sm:max-h-[220px] 2xl:max-w-[300px] 2xl:max-h-[300px]'
            />
          </div>
        </div>

        <div className='lg:w-1/2 overflow-hidden'>
          <h2 className='text-[30px] font-poppins font-bold text-primary'>
            My tool stack
          </h2>

          <div className='flex mt-8 justify-start gap-8 text-center flex-wrap'>
            <div className=' '>
              <img src={reacticon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>Reactjs</p>
            </div>
            <div className=' '>
              <img src={cssicon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>CSS3</p>
            </div>
            <div className=' '>
              <img src={htmlicon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>HTML5</p>
            </div>
            <div className=' '>
              <img src={dockericon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>Docker</p>
            </div>
            <div className=' '>
              <img src={graphicon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>Graphql</p>
            </div>
            <div className=' '>
              <img src={nexticon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>Nextjs</p>
            </div>

            <div className=' '>
              <img src={tsicon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary '>
                Typescript
              </p>
            </div>
            <div className=' '>
              <img src={giticon} alt='' className='w-8' />
              <p className='font-poppins font-light text-primary'>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
