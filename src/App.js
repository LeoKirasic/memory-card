import React, { useState } from 'react';
import Heading from './components/Heading';
import Main from './components/Main';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <div className="App">
      <Heading></Heading>
      <Main></Main>
    </div>
  );
}

export default App;
