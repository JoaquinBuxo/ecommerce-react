import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ query, setQuery }) => {
  return (
    <div>
      Search:
      <input
        value={query}
        type='search'
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

export default Search;
