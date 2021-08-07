import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Body from '@components/Body';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import { fetcher } from 'utils/fetcher';

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetcher('https://links.papareact.com/pyp');
  const cardsData = await fetcher('https://links.papareact.com/zp1');

  return {
    props: { exploreData, cardsData }
  };
};

export default function Home ({ exploreData, cardsData }) {
  return (
    <div className=' scrollbar-hide mb-20'>
      <Head>
        <title>Airbnb w/Nextjs & Tailwind-CSS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <Body exploreData={exploreData} cardsData={cardsData} />
      <Footer />
    </div>
  );
}
