import useSWR from 'swr';

export const useStaticProps = (key: string, initialData?: any) => {
  const { data, mutate } = useSWR(key, null, { initialData: initialData });
  const setStaticProps = (newData: any) => mutate(newData, false);

  return { staticProps: data, setStaticProps };
};
