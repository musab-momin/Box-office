import React from 'react';
import PersonCard from './PersonCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../../styled';


const PersonGrid = ({ data }) => {
    
  return (
    <FlexGrid>
      {data.map(item => (
        <PersonCard
          key={item.id}
          name={item.name}
          country={item.country ? item.country.name : null}
          birthday={item?.birthday}
          deathday = {item?.deathday}
          gender = { item?.gender }
          image = {item.image ? item.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default PersonGrid;
