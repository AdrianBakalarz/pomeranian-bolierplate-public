// import { useState } from 'react';
// import './style.css';

// export function LocalStorageSavedInput() {
//   const UNIQE_LOCALSTORAGE_KEY = 'savedInputKey';
//   const IdCounter = () => {
//     const [counter, setCounter] = useState(0);
//     const [nick, setNick] = useState('');

//     const incrementCounter = () => {
//       setCounter((prevCounter) => prevCounter + 1);
//     };
//     const handleNickChange = (event) => {
//       setNick(event.target.value);
//     };
//     const handleFormSubmit = (event) => {
//       event.preventDefault();
//       if (nick) {
//         setNick('');
//         incrementCounter();
//       }
//     };
//   };

//   const [getLocalStorageData, setLocalStorageData] = useState('');
//   const handleSave = () => {
//     localStorage.setItem(UNIQE_LOCALSTORAGE_KEY, getLocalStorageData);
//     return console.log('Zapisano dane w Local Storage', getLocalStorageData);
//   };

//   const handleClear = () => {
//     const storedData = localStorage.removeItem(UNIQE_LOCALSTORAGE_KEY);
//     return console.log('Usunieto dane z Local Storage', storedData);
//   };

//   return (
//     <>
//       <div className="main-container">
//         <div className="container-local-storage">
//           <h2>NICK</h2>
//           <input
//             className="nick"
//             type="text"
//             value={nick}
//             onChange={(event) => nick(event.target.value)}
//           />
//           <button className="adding" onClick={handleSave}>
//             DODAJ
//           </button>
//         </div>
//         <div className="container">
//           <button className="delete" onClick={handleClear}>
//             X
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
