import { InfoCardProps } from 'pages/search';
import React from 'react';
import { InfoCard } from './InfoCard';

interface Props {
  searchList: InfoCardProps[];
}

export const SearchList = ({ searchList }: Props) => {
  return (
    <div className='flex flex-col flex-1 overflow-y-scroll no-scrollbar'>
      {searchList.map(
        ({
          img,
          location,
          title,
          description,
          star,
          price,
          total,
          long,
          lat
        }) => (
          <InfoCard
            key={`${location}_${title}`}
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}
            long={long}
            lat={lat}
          />
        )
      )}
    </div>
  );
};
