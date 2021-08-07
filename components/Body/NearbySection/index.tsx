import React from 'react';
import useSWR from 'swr';
import { SmallCard } from './SmallCard';

export interface ExploreData {
  img: string;
  location: string;
  distance: string;
}
export interface ExploreNearbyProps {
  exploreData: ExploreData[];
}
export const EXPLORE_DATA = '/api/explore_data';

const index = ({ exploreData }: ExploreNearbyProps) => {
  return (
    <section className='pt-6'>
      <h2 className='text-3xl font-semibold pb-5'>Explore Nearby</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map(({ img, location, distance }) => (
          <SmallCard
            img={img}
            location={location}
            distance={distance}
            key={`${location}_${distance}`}
          />
        ))}
      </div>
    </section>
  );
};

export default index;
