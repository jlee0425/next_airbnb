import React from 'react';
import { LargeCard } from './LargeCard';
import LiveAnywhere, { LiveCardsProps } from './LiveAnywhere';
import NearbySection, { ExploreNearbyProps } from './NearbySection';

const index = ({
  exploreData,
  cardsData
}: ExploreNearbyProps & LiveCardsProps) => {
  return (
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <NearbySection exploreData={exploreData} />
      <LiveAnywhere cardsData={cardsData} />
      <LargeCard
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        desc='Wishlists curated by Airbnb.'
        buttonText='Get Inspired'
      />
    </main>
  );
};

export default index;
