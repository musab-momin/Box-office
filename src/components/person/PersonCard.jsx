import React from 'react'
import { StylePersonCard } from './PersonCard.Styled'

const PersonCard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <StylePersonCard>
      <div className='img-wrapper'>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className='deathday'>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StylePersonCard>
  )
}

export default PersonCard