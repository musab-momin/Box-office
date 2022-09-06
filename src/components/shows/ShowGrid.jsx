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
        const isSaved = state.includes(item.id)
        const toggleSaved = ()=>{
          if(isSaved){
            dispatch({type: 'REMOVE', showId: item.id})
          }
          else{
            dispatch({type: 'ADD', showId: item.id})
          }
        }

        return (
          <ShowCard
            key={item.id}
            id={item.id}
            name={item.name}
            summary={item.summary}
            image={item.image ? item.image.medium : IMAGE_NOT_FOUND}
            toggleShow = { toggleSaved }
            isSaved = { isSaved }
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
