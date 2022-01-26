import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <img
      className="card w-60 border-solid border-2 border-indigo-600"
      alt={props.name}
      src={props.img}
    ></img>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
