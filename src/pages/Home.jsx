import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getApi } from '../misc/config';

const Home = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    getApi(`/search/shows?q=/${search}`).then(data=>setResults(data)).catch(err=>console.error(err));
  };

  const onInputSearch = eve => {
    setSearch(eve.target.value);
  };

  const onEnter = eve => {
    if (eve.keyCode === 13) handleSearch();
  };

  const renderResult = () => {
    if (results && results.length > 0) {
      return (
        <div>
          {results?.map(item => (
            <div key={item.show.id}> {item.show.name} </div>
          ))}
        </div>
      );
    }

    if(results && results.length === 0){
      return <h3>No result found</h3>
    }
    return null;

  };

  return (
    <MainPageLayout>
      <input
        type="search"
        value={search}
        onChange={eve => onInputSearch(eve)}
        onKeyDown={eve => onEnter(eve)}
      />
      <button type="button" onClick={handleSearch}>
        {' '}
        Search{' '}
      </button>

      { renderResult() }
    </MainPageLayout>
  );
};

export default Home;
