import React from 'react';

export const HeroButton = () => {
  return (
    <div className='absolute top-1/2 w-full text-center '>
      <p className='filter text-sm sm:text-xl text-gray-900 font-bold'>
        Not sure where <br />
        to go? Perfect.
      </p>
      <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
        I'm flexible
      </button>
    </div>
  );
};
