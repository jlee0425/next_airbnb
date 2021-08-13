import React from 'react';

export const OptionSection = ({ range, numGuests, location }) => {
  return (
    <section className='pt-14 px-6'>
      <p>
        300+ Stays | {range} | {numGuests} Guests
      </p>
      <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
      <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        <p className='button'>Cancellation Flexibility</p>
        <p className='button'>Type of Places</p>
        <p className='button'>Price</p>
        <p className='button'>Rooms and Beds</p>
        <p className='button'>More filters</p>
      </div>
    </section>
  );
};
