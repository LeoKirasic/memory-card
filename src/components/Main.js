import React, { useState } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function Main(props) {
  const [cards, setCards] = useState([
    { name: 'spongebob', img: require('../assets/spongebob.png') },
    { name: 'gary', img: require('../assets/gary.png') },
    { name: 'patrick', img: require('../assets/patrick.png') },
    { name: 'squidward', img: require('../assets/squidward.png') },
    { name: 'krabs', img: require('../assets/krabs.png') },
    { name: 'plankton', img: require('../assets/plankton.png') },
  ]);
  const [clickedCards, setClickedCards] = useState([]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return (
    <div className="main-container flex justify-center">
      <Card
        name={cards[0].name}
        img={cards[0].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[1].name}
        img={cards[1].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[2].name}
        img={cards[2].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[3].name}
        img={cards[3].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[4].name}
        img={cards[4].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[5].name}
        img={cards[5].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
    </div>
  );
}

export default Main;

Main.propTypes = {
  currentScore: PropTypes.number,
  highestScore: PropTypes.number,
  setScore: PropTypes.func,
};
