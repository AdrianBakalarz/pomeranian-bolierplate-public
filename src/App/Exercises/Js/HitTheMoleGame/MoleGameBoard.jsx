import React from 'react';
import Mole from './Mole.png';
export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  gameTime,
}) => {
  return (
    <div className="moleGame">
      <h4>Wynik</h4> {scoreCount}
      <br />
      <h4>Czas do końca {gameTime}</h4>
      <div className="board">
        {moleArray.map((mole, index) => (
          <div className="square">
            <span>
              {mole.isVisible ? (
                <img src={Mole} alt="Mole!" onClick={() => hitTheMole(index)} />
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoleGameBoard;
