import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShows } from '../misc/custome-hook'
import { getApi } from '../misc/config';
import ShowGrid from '../components/shows/ShowGrid';


const Saved = () => {

  const [state] = useShows();
  const [shows, setShows] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const promises = state.map((showId) => getApi(`shows/${showId}`))

    Promise.all(promises)
    .then( showData =>{
      setLoading(false)
      setShows(showData)
    })
    .catch(err => {
      setLoading(false)
      setError(err.message);
    })

  }, [])


  return (
    <MainPageLayout>
      { loading && <h3>fetching...</h3> }
      { error && <h3>Oops! an error occured</h3> }
      { shows && shows.length > 0 && <ShowGrid data = {shows} />}
    </MainPageLayout>
  )
}

export default Saved