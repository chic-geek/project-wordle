import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

const answer = sample(WORDS);

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessResults, setGuessResults] = React.useState([]);

  function handleUpdateGuessList(guessValue) {
    const nextGuesses = [...guessResults, guessValue]
    setGuessResults(nextGuesses);
    
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
      return;
    }

    if (guessValue === answer) {
      setGameStatus('won');
      return;
    }
  }

  const gameOver = gameStatus !== 'running';
  
  return (
    <>
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleUpdateGuessList={handleUpdateGuessList} disabled={gameOver} />
    </>
  );
}

export default Game;
