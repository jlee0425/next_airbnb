import Body from '@components/Body';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Head from 'next/head';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Airbnb w/Nextjs & Tailwind-CSS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default index;
