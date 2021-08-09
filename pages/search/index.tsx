import Layout from '@components/Layout';
import { OptionSection } from '@components/searchPage/OptionSection';
import { SearchList } from '@components/searchPage/SearchList';
import { fetcher } from '@utils/fetcher';
import { format } from 'date-fns';
import { usePlaceholder } from 'hooks/usePlaceholder';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface InfoCardProps {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

interface Props {
  searchResults: InfoCardProps[];
}
export const getServerSideProps = async () => {
  const searchResults = await fetcher('https://links.papareact.com/isz');

  return {
    props: {
      searchResults
    }
  };
};

const index = ({ searchResults }: Props) => {
  const router = useRouter();
  const { location, numGuests, startDate, endDate } = router.query;
  const formatDate = (date: string | string[]) => {
    if (typeof date === 'string') return format(new Date(date), 'dd MMMM yy');
  };
  const range = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  const { setPlaceholder } = usePlaceholder();

  useEffect(() => {
    setPlaceholder(`${location} | ${range} | ${numGuests} guests`);
  }, [router.query]);

  return (
    <Layout>
      <div className='flex'>
        <OptionSection
          range={range}
          numGuests={numGuests}
          location={location}
        />
      </div>
      <SearchList searchList={searchResults} />
    </Layout>
  );
};

export default index;
