import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import PersonGrid from '../components/person/PersonGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { getApi } from '../misc/config';

const Home = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [searchType, setSearchType] = useState('shows');
  const isShowSearch = searchType === 'shows';

  const handleSearch = () => {
    const searchOption = searchType === 'shows' ? `/search/shows?q=/${search}` : `/search/people?q=/${search}`
    getApi(searchOption)
      .then(data => setResults(data))
      .catch(err => console.error(err));
  };

  const onInputSearch = eve => {
    setSearch(eve.target.value);
  };

  const onEnter = eve => {
    if (eve.keyCode === 13) handleSearch();
  };

  const onTypeChange = eve => {
    setSearchType(eve.target.value);
  };

  const renderResult = () => {
    if (results && results.length > 0) {
      return results[0].show ? <ShowGrid data={results} /> : <PersonGrid data = {results}/>;
    }

    if (results && results.length === 0) {
      return <h3>No result found</h3>;
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
        Search
      </button>

      <div>
        <label htmlFor="shows">
          Shows
          <input
            type="radio"
            id="shows"
            value="shows"
            onChange={onTypeChange}
            checked={isShowSearch}
          />
        </label>
        <label htmlFor="people">
          People
          <input
            type="radio"
            id="people"
            onChange={onTypeChange}
            value="people"
            checked={!isShowSearch}
          />
        </label>
      </div>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
