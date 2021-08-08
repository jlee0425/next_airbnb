import useSWR from 'swr';

const NUMBER_OF_GUESTS = 'NUMBER_OF_GUESTS';
export const useNumGuests = () => {
  const { data, mutate } = useSWR(NUMBER_OF_GUESTS, null, { initialData: 1 });
  const setNumGuests = (num: number) => mutate(num, false);

  return { numGuests: data, setNumGuests };
};
