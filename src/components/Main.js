import React, { useState } from 'react';
import Card from './Card';
function Main() {
  const [cards, setCards] = useState([
    { name: 'spongebob', img: require('../assets/spongebob.png') },
    { name: 'gary', img: require('../assets/gary.png') },
    { name: 'patrick', img: require('../assets/patrick.png') },
    { name: 'squidward', img: require('../assets/squidward.png') },
    { name: 'krabs', img: require('../assets/krabs.png') },
    { name: 'plankton', img: require('../assets/plankton.png') },
  ]);
  return (
    <div className="main-container flex justify-center">
      <Card name={cards[0].name} img={cards[0].img}></Card>
      <Card name={cards[1].name} img={cards[1].img}></Card>
      <Card name={cards[2].name} img={cards[2].img}></Card>
      <Card name={cards[3].name} img={cards[3].img}></Card>
      <Card name={cards[4].name} img={cards[4].img}></Card>
      <Card name={cards[5].name} img={cards[5].img}></Card>
    </div>
  );
}

export default Main;
