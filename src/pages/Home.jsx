import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'


const END_POINT = 'https://api.tvmaze.com/search/shows?q='

const Home = () => {

  const [search, setSearch] = useState('')


  const handleSearch = ()=>{
    fetch(`${END_POINT}${search}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(err=>console.error(err))
  }

  const onInputSearch = (eve)=>{
    setSearch(eve.target.value)
  }

  const onEnter = (eve)=>{
    if (eve.keyCode === 13)
      handleSearch();
  }

 

  return (
    <MainPageLayout>
      <input 
      type="search" 
      value={search}
      onChange = {(eve) => onInputSearch(eve)}
      onKeyDown = { (eve) => onEnter(eve) }
      />
      <button type='button' onClick={handleSearch}> Search </button>
    </MainPageLayout>
  )
}

export default Home