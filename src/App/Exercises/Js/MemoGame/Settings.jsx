import React from 'react';

export const Settings = ({
  boardSize,
  setBoardSize,
  startStopGame,
  gameStarted,
}) => {
  const boardSizeOption = [
    { label: '8 elementów', value: 8 },
    { label: '16 elementów', value: 16 },
    { label: '20 elementów', value: 20 },
  ];
  return (
    <div className="memoGameOption">
      <h4>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>LICZBA ELEMENTÓW {boardSize}</h4>
            {boardSizeOption.map(({ label, value }) => (
              <button
                className={value === boardSize ? 'activeButton' : ''}
                onClick={() => {
                  setBoardSize(value);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button onClick={() => startStopGame}>
              {gameStarted ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
