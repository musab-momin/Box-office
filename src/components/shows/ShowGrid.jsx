import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../../styled';


const ShowGrid = ({ data }) => {

  return (
    <FlexGrid>
      {data.map(item => (
        <ShowCard
          key={item.show.id}
          id = {item.show.id}
          name={item.show.name}
          summary={item.show.summary}
          image = { item.show.image ? item.show.image.medium : IMAGE_NOT_FOUND }
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
