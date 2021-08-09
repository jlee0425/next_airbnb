import { useNumGuests } from 'hooks/useNumGuests';
import { useSearchInput } from 'hooks/useSearchInput';
import { useSelectDates } from 'hooks/useSelectDates';
import { useRouter } from 'next/router';
import React from 'react';

export const SearchButtons = () => {
  const router = useRouter();
  const { numGuests, setNumGuests } = useNumGuests();
  const { searchInput, setSearchInput } = useSearchInput();
  const { selectedDates, setSelectedDates } = useSelectDates();

  const handleCancel = () => {
    setNumGuests(1);
    setSearchInput('');
    setSelectedDates({ startDate: new Date(), endDate: new Date() });
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearchInput('');
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        numGuests,
        startDate: selectedDates.startDate.toISOString(),
        endDate: selectedDates.endDate.toISOString()
      }
    });
  };

  return (
    <div className='flex'>
      <button className='flex-grow text-gray-500 button' onClick={handleCancel}>
        Cancel
      </button>
      <button
        className='flex-grow button'
        style={{ color: '#FD5B61' }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
