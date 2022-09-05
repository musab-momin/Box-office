import React from 'react'

const Title = ({headline, tagline}) => {
  return (
    <div>
        <h1>{ headline }</h1>
        <p>{ tagline }</p>
    </div>
  )
}

export default Title