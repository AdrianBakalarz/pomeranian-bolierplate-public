// import { useEffect } from 'react';
// import { useState } from 'react';

// function howManyMinutes(timestamp) {
//   return Math.floor(timestamp / 1000 / 60);
// }

// function howManySeconds(timestamp) {
//   return Math.floor(timestamp / 1000);
// }

// function getSecondsFromTime(timestamp) {
//   return Math.floor(timestamp / 1000) % 60;
// }

// function getMsFromTime(timestamp) {
//   return timestamp % 100;
// }

// export const Czas = () => {
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [msSeconds, setMsSeconds] = useState(0);
//   const [isWorking, setIsWorking] = useState(true);
//   const [startDate, setStartDate] = useState(Date.now());
//   const [deltaTime, setDeltaTime] = useState(0);

//   function stopWatch() {
//     const currentDate = Date.now();

//     setDeltaTime(currentDate - startDate + deltaTime);
//     setIsWorking(false);
//   }

//   function startWatch() {
//     setStartDate(Date.now());
//     setIsWorking(true);
//   }

//   useEffect(() => {
//     let intervalId;

//     if (isWorking) {
//       intervalId = setInterval(() => {
//         const currentDate = Date.now();
//         const timeDiff = currentDate - startDate + deltaTime;
//         const minutes = howManyMinutes(timeDiff);
//         const seconds = getSecondsFromTime(timeDiff);
//         const ms = getMsFromTime(timeDiff);

//         setMinutes(minutes);
//         setSeconds(seconds);
//         setMsSeconds(ms);
//       }, 10);
//     }
//     return () => clearInterval(intervalId);
//   }, [isWorking]);

//   return (
//     <>
//       <div>
//         {isWorking && <button onClick={() => stopWatch()}>Stop</button>}
//         {!isWorking && <button onClick={() => startWatch()}>Start</button>}
//         {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:
//         {msSeconds}
//       </div>
//     </>
//   );
// };

// const [currentOpacity, setOpacity] = useState(1);
// const [currentTimeOfAnimation, setCurrentAnimationTime] = useState(fadeTime);

// useEffect(() => {
//   const timeoutFlag = setInterval(() => {
//     setOpacity(currentOpacity - 0.25 / 60);
//   }, intervalTIme);
// }, []);

// return (
//   <>
//     <div
//       style={{
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'red',
//         opacity: currentOpacity,
//       }}
//     ></div>
//   </>
// );
// const [napis, setNapis] = useState('jakiś napis');
// const [isNapisVisible, setNapisVisibility] = useState(true);
// useEffect(() => {
//   setTimeout(() => {
//     setNapisVisibility(false);
//   }, 2000);
// }, []);

// return (
//   <>
//     <div>{isNapisVisible && napis}</div>
//   </>
// );
// const now = Date.now();
// const now2 = +new Date();

// const before = Date.now();

// for (let i = 0; i < 10000000; i++) {}
// const after = Date.now();

// return <div>Time {(after - before) / 1000}s</div>;

// export default Czas;

import { useState } from 'react';
import { useEffect } from 'react';

const Baner = () => {
  const [text, setText] = useState('Programowanie jest fajne');
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    let intervalId = null;
    if (isWorking) {
      intervalId = setInterval(() => {
        const letter = text[text.length - 1];
        setText(letter + text.substring(0, text.length - 1));
      }, 200);
    }
    return () => clearInterval(intervalId);
  }, [isWorking, text]);

  return (
    <>
      {isWorking && <button onClick={() => setIsWorking(false)}>Stop</button>}
      {!isWorking && <button onClick={() => setIsWorking(true)}>Start</button>}
      <div>{text}</div>
    </>
  );
};
export default Baner;
