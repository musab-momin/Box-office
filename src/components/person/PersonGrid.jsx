import React from 'react';
import PersonCard from './PersonCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../../styled';


const PersonGrid = ({ data }) => {
    
  return (
    <FlexGrid>
      {data.map(item => (
        <PersonCard
          key={item.person.id}
          name={item.person.name}
          country={item.person.country ? item.person.country.name : null}
          birthday={item.person?.birthday}
          deathday = {item.person?.deathday}
          gender = { item.person?.gender }
          image = {item.person.image ? item.person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default PersonGrid;
