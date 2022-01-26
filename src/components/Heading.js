import React from 'react';

function Heading(props) {
  return (
    <div className="heading bg-emerald-600">
      <div className="current-score">Current Score: 0</div>
      <div className="highest-score">Highest Score: 0</div>
    </div>
  );
}

export default Heading;
