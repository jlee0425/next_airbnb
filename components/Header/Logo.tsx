import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='relative flex items-center h-10 cursor-pointer my-auto p-0.5'>
      <Image
        src='https://links.papareact.com/qd3'
        layout='fill'
        objectFit='contain'
        objectPosition='left'
      />
    </div>
  );
};
