import React from 'react';
import Image from 'next/image';
import { LiveProps } from '.';

export const MediumCard = ({ img, title }: LiveProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out p-3'>
      <div className='relative w-80 h-80'>
        <Image src={img} layout='fill' className='rounded-xl' />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  );
};
