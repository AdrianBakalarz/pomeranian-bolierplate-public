import { useState, useEffect } from 'react';

import formatTime from './FormatTime';

export const MemoBoard = ({
  gameTime,
  setGameStart,
  boardSize,
  score,
  setScore,
  setFinalSettings,
}) => {
  const [memoArray, setMemoArray] = useState([]);
  useEffect(() => {
    const generateMemoArray = () => {
      const memoSymbols = 'ABCDEFGHIJKLMNOPRSTUWXYZ'; // Symbole 24, max tablica 48
      const memoCardsSymbols = [];
      for (let i = 0; i < boardSize / 2; i++) {
        const index = Math.floor(Math.random() * (24 - 0) + 0);
        const letter = memoSymbols.charAt(index);

        memoCardsSymbols.push({
          symbol: letter,
          isVisibleLetter: false,
          isVisibleBox: true,
        });
      }
      const shuffledCards = [...memoCardsSymbols, ...memoCardsSymbols].sort(
        () => Math.random() - 0.5
      );
      console.log(shuffledCards);
      setMemoArray(shuffledCards);
    };

    generateMemoArray();
  }, [boardSize]);

  const VisibleFunction = (index, memo) => {
    const updatedMemoArray = [...memoArray];
    updatedMemoArray[index] = { ...memo, isVisible: !memo.isVisibleLetteer };
    const isVisibleLetters = updatedMemoArray.filter((memo) => memo.isVisible);

    if (isVisibleLetters.length === 2) {
      setTimeout(() => {
        updatedMemoArray.forEach((memo) => {
          memo.isVisible = false;
        }, 2000);
      });
    }
    return updatedMemoArray;
  };
  return (
    <>
      <div className="container">
        <h2 className="item">CZAS GRY: </h2>
        <h2 className="timeAndScore">{formatTime(gameTime)}</h2>
        <h2 className="item">LICZBA RUCHÓW:</h2>
        <h2 className="timeAndScore">{score}</h2>
        <h2 className="item">PRZYCISKI STERUJĄCE</h2>
        <div className="stopButton">
          <button
            onClick={() => {
              setGameStart(false);
              setFinalSettings(boardSize);
            }}
          >
            STOP
          </button>
        </div>
      </div>
      <div className="memoGame">
        {memoArray.map((memo, index) => {
          return (
            <div key={index}>
              <span
                onClick={() => {
                  setScore(++score);
                  setMemoArray(VisibleFunction(index, memo));
                }}
              >
                <div id="square">{memo.isVisible && memo.symbol}</div>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
