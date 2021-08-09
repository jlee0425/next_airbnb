import { useSelectDates } from 'hooks/useSelectDates';
import React from 'react';
import { DateRangePicker, RangeWithKey } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { SearchBarGuests } from './SearchBarGuests';
import { SearchButtons } from './SearchButtons';

export const SearchCalendar = () => {
  const { selectedDates, setSelectedDates } = useSelectDates();

  const selectionRange: RangeWithKey = {
    ...selectedDates,
    key: 'selection'
  };

  const handleSelect = ({ selection }: { selection: RangeWithKey }) => {
    setSelectedDates({ ...selection });
  };

  return (
    <div className='flex flex-col col-span-3 mx-auto mt-4 transition transform duration-150 ease-in-out'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        rangeColors={['#FD5B61']}
      />
      <SearchBarGuests />
      <SearchButtons />
    </div>
  );
};
