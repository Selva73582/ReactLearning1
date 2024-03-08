// Input.js
import React from 'react';

const Input = ({ colourValue, setHashValue, isDarkText, setColourValue, setIsDarkTet }) => {
  return (
    <div className='InputContainer'>
      <form action="" onSubmit={(e) => { e.preventDefault(); }}>
        <label htmlFor="">
          <input
            type="text"
            autoFocus
            placeholder="Enter a colour :"
            required
            value={colourValue}  // changed 'target' to 'value'
            onChange={(e) => {
              setColourValue(e.target.value);
              setHashValue(e.target.value);  // modified to use colourValue
            }}
          />

          <button
            type="button"
            onClick={() => { setIsDarkTet(!isDarkText); }}
          >
            Toggle Dark Text
          </button>
        </label>
      </form>
    </div>
  );
};

export default Input;




