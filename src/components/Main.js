import React, { useState } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function Main(props) {
  const [cards, setCards] = useState([
    {
      name: 'Anne Lamott AKA Deer Dog',
      img: require('../assets/AnneLamott.jpg'),
    },
    {
      name: 'Caitlin Doughty AKA Death',
      img: require('../assets/CaitlinDoughty.jpg'),
    },
    {
      name: 'Damien Echols AKA Fish Bowl Man',
      img: require('../assets/DamienEchols.jpg'),
    },
    {
      name: 'David Nichtern AKA David',
      img: require('../assets/DavidNichtern.jpg'),
    },
    {
      name: 'Deneen Fendig AKA Deneen Fendig',
      img: require('../assets/DeneenFendig.jpg'),
    },
    {
      name: 'Dr. Drew AKA Glasses Man',
      img: require('../assets/DrDrew.jpg'),
    },
    {
      name: 'Jason Louv AKA Soul Bird',
      img: require('../assets/JasonLouv.jpg'),
    },
    {
      name: 'Trudy Goodman AKA Trudy The Love Barbarian',
      img: require('../assets/Trudygoodman.jpg'),
    },
  ]);
  const [clickedCards, setClickedCards] = useState([]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return (
    <div className="main-container flex justify-center ">
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
      <Card
        name={cards[6].name}
        img={cards[6].img}
        clickedCards={clickedCards}
        currentScore={props.currentScore}
        highestScore={props.highestScore}
        setScore={props.setScore}
        onClick={shuffleArray(cards)}
      ></Card>
      <Card
        name={cards[7].name}
        img={cards[7].img}
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
