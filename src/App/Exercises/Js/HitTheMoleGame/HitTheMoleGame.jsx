import React, { useState, useEffect } from 'react';

import './style.css';
import MoleGameSettings from './MoleGameSettings';
import MoleGameBoard from './MoleGameBoard';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime / 1000);
  // const [seconds, setSeconds] = useState(gameTime / 1000);
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: true, isWhacked: false })
  );

  const CountdownTimer = ({ initialCountdownState }) => {
    const [countdown, setCountdown] = useState(initialCountdownState);
    useEffect(() => {
      if (!countdown) return;
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1000);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [countdown]);
    return (
      <div>
        <p>time remaining: {countdown / 1000} seconds</p>
      </div>
    );
  };

  function hitTheMole(index) {
    console.log(moleArray[index].isWhacked);
    if (!moleArray[index].isVisible) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
    console.log(moleArray[index].isWhacked);
  }

  function showRandomMole() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const random = getRandomIntInclusive(0, moleArray.length - 1);
    console.log(random);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const updatedMole = { ...mole };
        updatedMole.isVisible = index === random;
        console.log(updatedMole);
        return updatedMole;
      })
    );
    console.log(moleArray);
  }

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
      />
      <MoleGameBoard
        scoreCount={scoreCount}
        moleArray={moleArray}
        hitTheMole={hitTheMole}
      />
      <CountdownTimer initialCountdownState={gameTime} />
      <button onClick={() => showRandomMole()}>KRECIK</button>
    </>
  );
}
