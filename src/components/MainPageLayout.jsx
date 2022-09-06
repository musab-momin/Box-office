import React from 'react'
import Navbar from './Navbar'
import Title from './Title'


const MainPageLayout = ({ children }) => {
  return (
    <div>
        <Title headline="SHOOOWBIZZZ" tagline="Find everything about any show or actor!" />
        <Navbar />
        { children }
    </div>
  )
}

export default MainPageLayout