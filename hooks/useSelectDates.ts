import { Range } from 'react-date-range';
import useSWR from 'swr';

const initialDate: Range = {
  startDate: new Date(),
  endDate: new Date()
};
const SELECT_DATES = 'SELECT_DATES';
export const useSelectDates = () => {
  const { data, mutate } = useSWR<Range>(SELECT_DATES, null, {
    initialData: initialDate
  });

  const setSelectedDates = (ranges: Range) => {
    mutate(ranges, false);
  };

  return { selectedDates: data, setSelectedDates };
};
