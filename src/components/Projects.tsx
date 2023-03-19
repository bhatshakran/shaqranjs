import React from 'react';
import soon from '../assets/soon.png';
import skiing from '../assets/skiing.png';
import chatter from '../assets/chatter.png';
import ecommerce from '../assets/ecommerce.png';
import github from '../assets/github.jpg';
import shop from '../assets/shop.png';

const Projects: React.FC = () => {
  return (
    <section className='my-60  px-8 lg:px-0'>
      <h2 className='text-[30px] w-full text-right font-bold font-poppins text-primary'>
        My Projects
      </h2>
      <div className='flex flex-wrap  justify-center lg:justify-start  gap-4 gap-y-8 mt-12'>
        <div className='project w-full md:w-auto bg-yellow-200   text-primary flex flex-col gap-6 shadow-sm  items-center'>
          <div className='flex  w-full sm:w-[330px] p-4 flex-col items-center justify-center gap-3   '>
            <img src={soon} alt='' className='  max-w-[300px] max-h-[200px]' />

            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold  text-secondary'>Ottelo</h6>
              <a
                href='https://ottelo.vercel.app/'
                target='_
              '
              >
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-500'>
                A hotel listing app where you can search and make reservations
                for rooms.
              </p>
            </div>
          </div>
        </div>
        <div className='project w-full md:w-auto bg-white text-primary flex flex-col gap-6  shadow-sm  items-center'>
          <div className='flex p-4  w-full sm:w-[330px] flex-col items-center justify-center gap-3   '>
            <img
              src={skiing}
              alt=''
              className='  max-w-[300px] max-h-[200px]'
            />
            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold text-secondary '>Skii store</h6>
              <a href='https://snowboard-store.vercel.app/' target='_blank'>
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-500'>
                Skii store is a ecommerce shop. You can buy world class skii
                equipment from this store.
              </p>
            </div>
          </div>
        </div>
        <div className='project w-full md:w-auto text-primary  bg-creme flex flex-col gap-6  shadow-sm  items-center'>
          <div className='flex p-4 w-full sm:w-[330px]  flex-col items-center justify-center gap-3   '>
            <img
              src={chatter}
              alt=''
              className='  max-w-[300px] max-h-[200px]'
            />
            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold  text-secondary'>Chatter</h6>
              <a href='https://chatterweb.netlify.app' target='_blank'>
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-500'>
                A modern chat application where you can chat with your
                friends(gang).
              </p>
            </div>
          </div>
        </div>
        <div className='project w-full md:w-auto bg-secondary text-white flex flex-col gap-6  shadow-sm  items-center'>
          <div className='flex p-4  w-full sm:w-[330px] flex-col items-center justify-center gap-3   '>
            <img
              src={ecommerce}
              alt=''
              className='  max-w-[300px] max-h-[200px]'
            />
            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold text-white '>DesiVibes</h6>
              <a href='https://desivibes-a02a5.web.app' target='_blank'>
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-100'>
                An ecommerce store where you can shop for hoodies, tshirts and
                shirts.
              </p>
            </div>
          </div>
        </div>

        <div className='project bg-white  w-full md:w-auto text-primary flex flex-col gap-6  shadow-sm  items-center'>
          <div className='flex p-4  w-full sm:w-[330px] flex-col items-center justify-center gap-3   '>
            <img
              src={github}
              alt=''
              className='  max-w-[300px] max-h-[200px]'
            />
            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold text-secondary '>
                Github Finder
              </h6>
              <a href='https://ghfinderr.netlify.app/' target='_blank'>
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-500'>
                Github finder utilizes the github api. You can search for users
                and get the users profile, repos and monos etc.
              </p>
            </div>
          </div>
        </div>
        <div className='project bg-yellow-200  w-full md:w-auto text-primary flex flex-col gap-6  shadow-sm  items-center'>
          <div className='flex p-4  w-full sm:w-[330px] flex-col items-center justify-center gap-3   '>
            <img src={shop} alt='' className='  max-w-[300px] max-h-[200px]' />
            <div className='flex justify-between w-full mt-4'>
              <h6 className='text-lg font-bold text-secondary '>Shop Stop</h6>
              <a
                href='https://legendary-sopapillas-c6d249.netlify.app/'
                target='_blank'
              >
                Go to project
              </a>
            </div>
            <div>
              <p className='text-sm font-poppins text-gray-500'>
                Shop stop allows users to create and view shops in different
                cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
