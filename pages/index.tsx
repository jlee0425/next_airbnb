import Body from '@components/Body';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
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
    <Layout>
      <Hero />
      <Body exploreData={exploreData} cardsData={cardsData} />
    </Layout>
  );
}
