import React from 'react'
import { TitleWrapper } from './Title.Styled'


const Title = ({headline, tagline}) => {
  return (
    <TitleWrapper>
        <h1>{ headline }</h1>
        <p>{ tagline }</p>
    </TitleWrapper>
  )
}

export default Title