import React from 'react';
import Mole from './Mole.png';
export const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (
    <div className="moleGame">
      Obecny wynik to: {scoreCount}
      <div className="board">
        {moleArray.map((mole, index) => (
          <div className="square">
            <span>
              {mole.isVisible ? (
                <img src={Mole} id="Mole!" onClick={() => hitTheMole(index)} />
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoleGameBoard;
