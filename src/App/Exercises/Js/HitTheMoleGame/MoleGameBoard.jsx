import React from 'react';
import Mole from './Mole.png';
const MoleGameBoard = ({ scoreCount, moleArray, hitTheMole }) => {
  return (
    <div className="moleGame">
      <h4>Obecny wynik = {scoreCount} </h4>
      {moleArray.map((mole, index) => {
        return (
          <div
            style={{
              width: '103.77px',
              height: '103.77px',
              display: 'flex',
              gap: '15px',
              backgroundColor: 'grey',
              borderRadius: '8px',
            }}
          >
            <span>
              {mole.isVisible ? (
                <img
                  src={Mole}
                  alt="krecik"
                  onClick={() => hitTheMole(index)}
                />
              ) : null}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MoleGameBoard;
