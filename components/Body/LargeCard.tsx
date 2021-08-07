import Image from 'next/image';
import React from 'react';

interface LargeCardProps {
  img: string;
  title: string;
  desc: string;
  buttonText: string;
}

export const LargeCard = ({ img, title, desc, buttonText }: LargeCardProps) => {
  return (
    <section className='relative py-16 cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p className='text-gray-700'>{desc}</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
          {buttonText}
        </button>
      </div>
    </section>
  );
};
