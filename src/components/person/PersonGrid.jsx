import React from 'react';
import PersonCard from './PersonCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png'


const PersonGrid = ({ data }) => {
    console.log(data[0].person);
  return (
    <div>
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
    </div>
  );
};

export default PersonGrid;
