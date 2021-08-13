import React from 'react';
import Image from 'next/image';
import { InfoCardProps } from '../../pages/search';
import { HeartIcon, StarIcon } from '@heroicons/react/outline';

export const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat
}: InfoCardProps) => {
  return (
    <div className='flex p-7 border-b  cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>

      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between items-center'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl font-semibold'>{title}</h4>

        <div className='border-b w-20 p-1' />

        <p className='pt-2 text-sm text-gray-600 flex-grow'>{description}</p>

        <div className='flex justify-between items-end'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400 mr-2' />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};