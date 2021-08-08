import React from 'react';
import { footerInfo, FooterInfoProps } from '@utils/footerInfo';
import { FooterDiv } from './FooterDiv';

const index = () => {
  return (
    // gap is better than space-y, but gap may not be supported on Safari
    <div className='grid gird-cols-1 md:grid-cols-4 md:space-y-0 sm:space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      {footerInfo.map(({ title, tags }: FooterInfoProps) => (
        <FooterDiv title={title} tags={tags} key={`footer_${title}`} />
      ))}
    </div>
  );
};

export default index;
