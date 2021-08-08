import useSWR from 'swr';

const SEARCH_INPUT = 'SEARCH_INPUT';
export const useSearchInput = () => {
  const { data, mutate } = useSWR(SEARCH_INPUT, null, { initialData: '' });

  const setSearchInput = (input: string) => mutate(input, false);

  return { searchInput: data, setSearchInput };
};
