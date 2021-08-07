import { FooterInfoProps } from '@utils/footerInfo';
import React from 'react';

export const FooterDiv = ({ title, tags }: FooterInfoProps) => {
  return (
    <div className='space-y-4 text-xs text-gray-800 '>
      <h1 className='font-bold'>{title}</h1>
      {tags.map(t => (
        <p key={t.toString()}>{t}</p>
      ))}
    </div>
  );
};
