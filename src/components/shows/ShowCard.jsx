import React from 'react'
import {Link} from 'react-router-dom'
import { StyleShowCard } from './ShowCard.Styled';

const ShowCard = ({  id, name, summary, image}) => {

  const summaryAsText = summary
  ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
  : 'No description';
  return (
    <StyleShowCard>
      <div className='img-wrapper'>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Save it</button>
      </div>
    </StyleShowCard>
  )
}

export default ShowCard