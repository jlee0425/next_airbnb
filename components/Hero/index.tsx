import Image from 'next/image';
import React from 'react';
import { HeroButton } from './HeroButton';
import cambie from '@images/cambiest.jpg';

const index = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1200px]'>
      <Image src={cambie} layout='fill' objectFit='cover' />
      <HeroButton />
    </div>
  );
};

export default index;
