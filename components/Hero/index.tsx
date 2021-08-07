import Image from 'next/image';
import React from 'react';
import { HeroButton } from './HeroButton';
import jeju from '@images/jeju.jpg';
import { HeroText } from './HeroText';

const index = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[800px]'>
      <Image src={jeju} layout='fill' objectFit='cover' />
      <div className='absolute top-1/3 left-12 w-80 p-5 rounded-2xl'>
        <HeroText />
        <HeroButton />
      </div>
    </div>
  );
};

export default index;
