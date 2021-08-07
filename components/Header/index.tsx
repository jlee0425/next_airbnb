import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';

interface Props {}

const index = (props: Props) => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <Logo />
      <SearchBar />
      <Menu />
    </header>
  );
};

export default index;
