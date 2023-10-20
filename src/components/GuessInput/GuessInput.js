import React from 'react';

function GuessInput({ handleUpdateGuessList, disabled }) {
  const [guessValue, setGuessValue] = React.useState('');
  
  function handleInputSubmit(e) {
    e.preventDefault();
    handleUpdateGuessList(guessValue);
    setGuessValue('');
  }

  function handleInputChange(e) {
    setGuessValue(e.target.value.toUpperCase());
  }
  
  return (
    <form className="guess-input-wrapper" onSubmit={handleInputSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        disabled={disabled}
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessValue} 
        onChange={handleInputChange} 
      />
    </form>
  );
}

export default GuessInput;
