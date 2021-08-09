import { SearchIcon } from '@heroicons/react/outline';
import { usePlaceholder } from 'hooks/usePlaceholder';
import { useSearchInput } from 'hooks/useSearchInput';
import React, { ChangeEvent } from 'react';

export const SearchBar = () => {
  const { searchInput, setSearchInput } = useSearchInput();
  const { placeholder, setPlaceholder } = usePlaceholder();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFocus = () => setPlaceholder('');

  return (
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
      <input
        type='text'
        placeholder={placeholder || 'Start Your Search'}
        value={searchInput}
        onChange={handleChangeInput}
        onFocus={handleFocus}
        className='flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none'
      />
      <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
    </div>
  );
};
