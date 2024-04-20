// GenreSelector.jsx
import React from 'react';
import './GenreSelector.css';
import PropTypes from 'prop-types';

function GenreSelector({ setSelectedGenre }) {
  return (
    <div>
      <button onClick={() => setSelectedGenre('fiction')}>Fiction</button>
      <button onClick={() => setSelectedGenre('non-fiction')}>Non-Fiction</button>
      <button onClick={() => setSelectedGenre('children')}>Children</button>
    </div>
  );
}

GenreSelector.propTypes = {
  setSelectedGenre: PropTypes.func.isRequired,
};

export default GenreSelector;
