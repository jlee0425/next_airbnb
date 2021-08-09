import useSWR from 'swr';

const PLACEHOLDER = 'PLACEHOLDER';
export const usePlaceholder = () => {
  const { data, mutate } = useSWR(PLACEHOLDER, null, { initialData: '' });

  const setPlaceholder = (input: string) => mutate(input, false);

  return { placeholder: data, setPlaceholder };
};
