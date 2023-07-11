import React from 'react';

export const MoleGameSettings = ({
  gameTime,
  moleCount,
  setGameTime,
  setMoleCount,
  startStopGame,
  seconds,
  highScore,
  scoreCount,
  setSeconds,
  setScoreCount,
}) => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];
  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];
  return (
    <div className="moleGameOptions">
      <h4>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>
      <h2 className="scoreLabel">
        {highScore >= 0 && seconds === 0
          ? `Twój NAJWYZSZY wynik to ${highScore}`
          : ''}
      </h2>
      <h2 className="scoreLabel">
        {scoreCount >= 0 && seconds === 0
          ? `Twój wynik w tym podejściu to ${scoreCount} w czasie ${
              gameTime / 1000 / 60
            } ${gameTime / 1000 / 60 === 1 ? 'minuty' : 'minut'}`
          : ''}
      </h2>
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>CZAS GRY</h4>
            {gameTimeOption.map(({ label, timeValue }) => (
              <button
                className={gameTime === timeValue ? 'activeButton' : ''}
                onClick={() => {
                  setSeconds(timeValue / 1000);
                  setGameTime(timeValue);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>LICZBA KRETÓW</h4>
            {moleCountOption.map(({ label }) => (
              <button
                className={moleCount === Number(label[0]) ? 'activeButton' : ''}
                onClick={() => setMoleCount(Number(label[0]))}
                key={label}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button
              onClick={() => {
                startStopGame(true);
                setScoreCount(0);
              }}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoleGameSettings;
