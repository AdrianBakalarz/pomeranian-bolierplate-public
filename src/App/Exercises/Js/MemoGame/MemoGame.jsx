import React, { useEffect, useState } from 'react';
import Settings from './Settings';
import Board from './Board';

export const MemoGame = () => {
  const defaultBoardSize = '';
  const [gameTime, setGameTime] = useState(0);
  const [boardSize, setBoardSize] = useState(defaultBoardSize);
  const [clicks, setClicks] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [memoArray, setMemoArray] = useState(Array(16).fill('A'));

  useEffect(() => {
    let countdownInterval;

    if (!countdownInterval && gameStarted) {
      countdownInterval = setInterval(() => {
        setCounter((previousCounter) => previousCounter + 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [counter, gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameStarted) setCounter(0);
  }, [gameStarted, gameTime]);

  function handleCellClick() {
    setClicks((prevValue) => prevValue + 1);
  }
  return (
    <>
      <Settings
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        startStopGame={() => setGameStarted((prev) => !prev)}
        gameStarted={gameStarted}
      />
      <Timer time={counter} />
    </>
  );
};

const Timer = ({ time }) => {
  <h4>CZAS GRY {time}</h4>;
};
