
// Square.js
import React from 'react';

const Square = ({ colourValue, hashValue, isDarkText }) => {
  return (
    <div>
      <section
      className='SquareContainer'
      style={{
          backgroundColor: colourValue,
          color: isDarkText ? "#000" : "#FFF"
        }}
      >
        <p>{colourValue ? colourValue : "Empty colour"}</p>
        <p>{hashValue ? hashValue : "Null"}</p>
      </section>
    </div>
  );
};

export default Square;