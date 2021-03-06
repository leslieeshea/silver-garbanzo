import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, id }) {
  return (
    <p>{comment}</p>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Comment;
