import { UsersIcon } from '@heroicons/react/outline';
import { useNumGuests } from 'hooks/useNumGuests';
import React, { ChangeEvent } from 'react';

export const SearchBarGuests = () => {
  const { numGuests, setNumGuests } = useNumGuests();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumGuests(Number(e.target.value));
  };

  return (
    <div className='flex items-center border-b mb-4'>
      <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
      <UsersIcon className='h-5' />
      <input
        type='number'
        className='w-12 pl-2 text-lg outline-none'
        style={{ color: '#FD5B61' }}
        value={numGuests}
        onChange={handleChange}
        min={1}
      />
    </div>
  );
};
