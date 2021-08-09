import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePlaceholder } from 'hooks/usePlaceholder';

export const Logo = () => {
  const router = useRouter();
  const { setPlaceholder } = usePlaceholder();
  const handleClick = () => {
    setPlaceholder('');
    router.push('/');
  };

  return (
    <div className='relative flex items-center h-10 cursor-pointer my-auto p-0.5'>
      <Image
        src='https://links.papareact.com/qd3'
        layout='fill'
        objectFit='contain'
        objectPosition='left'
        onClick={handleClick}
      />
    </div>
  );
};
