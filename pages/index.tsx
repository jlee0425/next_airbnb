import Head from 'next/head';
import React from 'react';
import Banner from '@components/Banner';
import Header from '@components/Header';

export default function Home () {
  return (
    <div className=''>
      <Head>
        <title>Airbnb w/Nextjs & Tailwind-CSS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
