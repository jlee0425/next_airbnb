import Layout from '@components/Layout';
import { Map } from '@components/Map';
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

export interface Props {
  searchResults: InfoCardProps[];
}
export const getServerSideProps = async () => {
  const searchResults = await fetcher<InfoCardProps[]>(
    'https://links.papareact.com/isz'
  );

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
      <div className='flex h-screen'>
        <div className='flex flex-col overflow-hidden'>
          <OptionSection
            range={range}
            numGuests={numGuests}
            location={location}
          />
          <SearchList searchList={searchResults} />
        </div>
        <section className='hidden xl:inline-flex xl:min-w-[600px] xl:w-1/2'>
          <Map searchResults={searchResults} />
        </section>
      </div>
    </Layout>
  );
};

export default index;
