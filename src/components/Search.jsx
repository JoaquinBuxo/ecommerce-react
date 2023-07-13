import PropTypes from 'prop-types';

const Search = ({ query, setQuery }) => {
  return (
    <div className='join flex justify-center'>
      <input
        id='search'
        value={query}
        type='search'
        onChange={(e) => setQuery(e.target.value)}
        className='input input-bordered join-item'
        placeholder='Search...'
      />
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

export default Search;
