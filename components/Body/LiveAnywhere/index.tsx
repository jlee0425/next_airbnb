import { useWindowSize } from 'hooks/useWindowSize';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { breakpoints } from 'utils/breakpoints';
import { MediumCard } from './MediumCard';

export interface LiveProps {
  img: string;
  title: string;
}

export interface LiveCardsProps {
  cardsData: LiveProps[];
}

const index = ({ cardsData }: LiveCardsProps) => {
  return (
    <section>
      <h2 className='text-3xl font-semibold py-6'>Live Anywhere</h2>
      <div className='flex space-x-3 scrollbar-hide overflow-scroll'>
        {cardsData?.map(({ img, title }) => (
          <MediumCard title={title} img={img} key={`${title}_${img}`} />
        ))}
      </div>
    </section>
  );
};

export default index;
