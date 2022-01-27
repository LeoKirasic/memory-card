import React from 'react';
import PropTypes from 'prop-types';
function Card(props) {
  function addCardToArray(e) {
    if (props.clickedCards.length === 0) {
      props.clickedCards.push(e.target.alt);
      props.setScore(1);
    } else {
      if (props.clickedCards.find((element) => element === e.target.alt)) {
        console.log('same card');
        props.clickedCards.length = 0;
        props.setScore(-1);
      } else {
        props.clickedCards.push(e.target.alt);
        props.setScore(1);
      }
    }
  }
  return (
    <img
      className="card w-60 border-solid border-2 border-indigo-600"
      alt={props.name}
      src={props.img}
      onClick={addCardToArray}
    ></img>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  clickedCards: PropTypes.array,
  setScore: PropTypes.func,
};
