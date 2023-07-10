import React, { useState, useEffect } from 'react';

import MoleGameSettings from './MoleGameSettings.jsx';

import './style.css';

import MoleGameBoard from './MoleGameBoard.jsx';

export const HitTheMoleGame = () => {
  const defaultGameTime = 1 * 60 * 1000;
  const moleSpeed = 1000;
  const [moleCount, setMoleCount] = useState(1);
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  const [seconds, setSeconds] = useState(gameTime);
  const [scoreCount, setScoreCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  // const [timer, setTimer] = useState(gameTime / 1000);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  useEffect(() => {
    let intervalId;
    if (!intervalId && gameStarted) {
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        debugger;
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  useEffect(() => {
    let intervalId;
    if (!intervalId) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, moleSpeed);
      return () => clearInterval(intervalId);
    }
  }, [gameTime]);

  function formatTime(gameTime) {
    const minutes = Math.floor(gameTime / 60);
    const secondsFormatted = gameTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsFormatted
      .toString()
      .padStart(2, '0')}`;
  }

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  }

  function showRandomMole() {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const random = getRandom(0, moleArray.length - 1);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = index === random;
        return newMole;
      })
    );
  }

  return (
    <>
      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          moleCount={moleCount}
          setGameTime={setGameTime}
          setMoleCount={setMoleCount}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}
      {gameStarted ? <Timer time={formatTime(seconds)} /> : null}
      {gameStarted ? (
        <MoleGameBoard
          moleArray={moleArray}
          hitTheMole={hitTheMole}
          scoreCount={scoreCount}
        />
      ) : null}
    </>
  );
};
const Timer = ({ time }) => {
  return <p>Pozostały czas {time}</p>;
};
