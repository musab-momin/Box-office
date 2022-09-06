import React, { useState } from 'react';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import PersonGrid from '../components/person/PersonGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { getApi } from '../misc/config';
import { useLastQuery } from '../misc/custome-hook';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.Styled';

const Home = () => {
  const [search, setSearch] = useLastQuery();
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('shows');
  const [error, setError] = useState(null);
  const isShowSearch = searchType === 'shows';

  const handleSearch = () => {
    const searchOption =
      searchType === 'shows'
        ? `/search/shows?q=/${search}`
        : `/search/people?q=/${search}`;
    getApi(searchOption)
      .then(data => {
        const showData = data.map(item => item.show ? item.show : item.person );
        setResults(showData);
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
    if (!isShowSearch && results.length > 0) {
      return <PersonGrid data={results} />;
    }

    if (results === null) {
      return <h3>Search something</h3>;
    }
    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="search"
        value={search}
        onChange={eve => onInputSearch(eve)}
        onKeyDown={eve => onEnter(eve)}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            lable="Shows"
            id="shows-search"
            value="shows"
            onChange={onTypeChange}
            checked={isShowSearch}
          />
        </div>
        <div>
          <CustomRadio
            lable="Actors"
            id="actors-search"
            value="people"
            onChange={onTypeChange}
            checked={!isShowSearch}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
