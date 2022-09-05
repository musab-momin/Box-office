import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/shows/Cast';
import Details from '../components/shows/Details';
import Season from '../components/shows/Season';
import ShowMainData from '../components/shows/ShowMainData';
import { getApi } from '../misc/config';

const INITIAL_STATE = {
  show: null,
  loading: true,
  errors: null,
};

const reducer = (prevState, action) => {
  if (action.type === 'Fetch_Success') {
    return { ...prevState, loading: false, show: action.show };
  }

  if (action.type === 'Fetch_Failed') {
    return { ...prevState, loading: false, errors: action.err };
  }

  return prevState;
};

const Show = () => {
  const { id } = useParams();

  const [{ show, loading, errors }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );


  useEffect(() => {
    let isMounting = true;
    getApi(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(data => {
        if (isMounting) {
          dispatch({ type: 'Fetch_Success', show: data });
        }
      })
      .catch(err => {
        if (isMounting) {
          dispatch({ type: 'Fetch_Failed', err: err.message });
        }
      });

    return () => {
      isMounting = false;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Oops! An error accured</div>;
  }

  return(
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Season seasons={show._embedded.seasons}/> 
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>

  )
};

export default Show;
