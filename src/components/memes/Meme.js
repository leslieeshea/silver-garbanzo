import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Meme({ url }) {
  return (
    <img src={url} />
  );
}

Meme.propTypes = {
  url: PropTypes.string.isRequired
};

export default Meme;
