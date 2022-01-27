import React from 'react';
import PropTypes from 'prop-types';
function Heading(props) {
  return (
    <div className="heading bg-indigo-700">
      <div className="current-score">Current Score: {props.currentScore}</div>
      <div className="highest-score">Highest Score: {props.highestScore}</div>
    </div>
  );
}

export default Heading;

Heading.propTypes = {
  currentScore: PropTypes.number,
  highestScore: PropTypes.number,
};
