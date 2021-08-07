import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

export const SearchBar = () => {
  return (
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
      <input
        type='text'
        placeholder='Start Your Search'
        className='flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none'
      />
      <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
    </div>
  );
};
