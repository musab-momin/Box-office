import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png';
import { FlexGrid } from '../../styled';
import { useShows } from '../../misc/custome-hook';

const ShowGrid = ({ data }) => {
  const [state, dispatch] = useShows();

  

  return (
    <FlexGrid>
      {data.map(item => {
        const isSaved = state.includes(item.show.id)

        const toggleSaved = ()=>{
          if(isSaved){
            dispatch({type: 'REMOVE', showId: item.show.id})
          }
          else{
            dispatch({type: 'ADD', showId: item.show.id})
          }
        }

        return (
          <ShowCard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            summary={item.show.summary}
            image={item.show.image ? item.show.image.medium : IMAGE_NOT_FOUND}
            toggleShow = { toggleSaved }
            isSaved = { isSaved }
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
