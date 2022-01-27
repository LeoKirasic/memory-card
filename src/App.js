import React, { useState } from 'react';
import Heading from './components/Heading';
import Main from './components/Main';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function setScore(modifier) {
    if (modifier === -1) {
      setCurrentScore(0);
    } else {
      setCurrentScore(currentScore + modifier);
      if (highestScore <= currentScore) {
        setHighestScore(currentScore + 1);
      }
    }
  }

  return (
    <div className="App">
      <Heading
        currentScore={currentScore}
        highestScore={highestScore}
      ></Heading>
      <Main
        currentScore={currentScore}
        highestScore={highestScore}
        setScore={setScore}
      ></Main>
    </div>
  );
}

export default App;
