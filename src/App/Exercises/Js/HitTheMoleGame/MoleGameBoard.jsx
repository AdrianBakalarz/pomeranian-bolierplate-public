import React, { useEffect } from 'react';
import Mole from './Mole.png';
export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  gameTime,
  setGameStarted,
  setSeconds,
  gameStarted,
  formatTime,
  seconds,
}) => {
  const handleStop = () => {
    setGameStarted(!gameStarted);
  };
  useEffect(() => {
    if (scoreCount === 20) {
      setGameStarted(!gameStarted);
      setSeconds(0);
    }
  }, [gameStarted, scoreCount, setGameStarted, setSeconds]);
  return (
    <>
      <div className="container">
        <h2 className="infoLabel">CZAS DO KOŃCA: </h2>
        <h2 className="timeAndScore">{formatTime(seconds)}</h2>
        <h2 className="infoLabel">WYNIK:</h2>
        <h2 className="timeAndScore">{scoreCount}</h2>
        <h2 className="infoLabel">PRZYCISKI STERUJĄCE</h2>
        <div className="stopButton">
          <button
            onClick={() => {
              handleStop();
              setSeconds(0);
            }}
          >
            STOP
          </button>
        </div>
      </div>
      <div className="moleGame">
        <div className="board">
          {moleArray.map((mole, index) => (
            <div className="square">
              <span>
                {mole.isVisible ? (
                  <img
                    src={Mole}
                    alt="Mole!"
                    onClick={() => hitTheMole(index)}
                  />
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoleGameBoard;
