import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import PersonGrid from '../components/person/PersonGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { getApi } from '../misc/config';
import { useLastQuery } from '../misc/custome-hook';

const Home = () => {
  const [search, setSearch] = useLastQuery();
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('shows');
  const [error, setError] = useState(null)
  const isShowSearch = searchType === 'shows';

  const handleSearch = () => {
    const searchOption = searchType === 'shows' ? `/search/shows?q=/${search}` : `/search/people?q=/${search}`
    getApi(searchOption)
      .then(data => {
        const showData = data.map(item => item.show)
        setResults(showData)
      })
      .catch(err => setError(err.message));
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
    if (isShowSearch && results.length > 0) {
      return <ShowGrid data={results} />;
    }
    if (!isShowSearch && results.length > 0){
      return <PersonGrid data={results} />
    }

    if (results === null) {
      return <h3>Search something</h3>;
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
