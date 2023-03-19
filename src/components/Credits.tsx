import React from 'react';

const Credits: React.FC = () => {
  return (
    <div className='mt-60'>
      <div className='border-t border-secondary flex flex-col items-center py-20 justify-center font-poppins text-sm text-primary gap-1'>
        <p>
          Made with ❤️ using{' '}
          <span className='text-primary font-bold'> Reactjs</span>
        </p>
        <p className='text-[10px] font-semibold'>Copyright(c)2023</p>
      </div>
    </div>
  );
};

export default Credits;
