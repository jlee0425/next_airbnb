import { useSearchInput } from 'hooks/useSearchInput';
import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';
import { SearchCalendar } from './SearchCalendar';

const index = () => {
  const { searchInput } = useSearchInput();

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <Logo />
      <SearchBar />
      <Menu />
      {searchInput && <SearchCalendar />}
    </header>
  );
};

export default index;
