import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='px-3 lg:px-0 py-2  flex w-full justify-between items-center'>
      <div>
        <h4 className='font-poppins text-2xl lg:text-[30px] font-bold text-primary'>
          Shaqran
        </h4>
      </div>

      <ul className='lg:flex items-center hidden gap-16 text-base'>
        <li>Github</li>
        <li>LinkedIn</li>
      </ul>

      <div>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
