import React from 'react';
import './singleComment.css';
// import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <div className='comment-card' data-testid="display-box-test">
      <h3>{props.comment.title}</h3>
      <p>{`${props.comment.comment}`}</p>
      <p>{props.comment.name}</p>
      <p>{props.comment.date}</p>
    </div>
  );
};

// Display.propTypes = {
//   color: PropTypes.string
// };

export default Display;