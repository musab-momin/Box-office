import React from 'react'
import Navbar from './Navbar'
import Title from './Title'


const MainPageLayout = ({ children }) => {
  return (
    <div>
        <Title headline="Filmography" tagline="Find everything about any movie!" />
        <Navbar />
        { children }
    </div>
  )
}

export default MainPageLayout