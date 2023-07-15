import { IfStatements } from './IfStatements';
import { IfExercise } from './IfExercise';

export function Exercise() {
  const a = 5;
  const b = 2;

  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

  // Przykłady innych operacji
  // a += 1 - zwiększamy a o 1
  // a -= 1 - zmniejszamy a o 1
  // a *= 1 - mnozymy a przez 1
  // -------------------------- //

  //   const result = a > b;
  //   const result = a >= b;
  //   const result = a < b;
  //   const result = a <= b;
  //   const result = a === b;

  //   IF --------------------- //
  const parseINT = parseInt('5');
  // nie zadziała dla: null, undefined...
  // isNaN - sprawdza, czy podana wartość jest liczbą
  // Math.round - zaokrągla liczbe, ktora ma przecinek - nawet w przypadku stringa
  // Math.ceil - zaokrągla zawsze do wyzszej liczby
  // Math.floor - zaokrągla zawsze do nizszej liczby
  // Math.sqrt - słuzy do pierwiastkowania
  // Math.pow - do potęgowania
  // Math.max - szuka ze zbioru liczb największej liczby
  // Math.min - najmniejszej
  // Math.random - zwraca randomową liczbę

  Number.isInteger(10);
  console.log(parseINT);

  return (
    <>
      <div> addResult: {addResult}</div>
      <div> substResult: {substResult}</div>
      <div> multiplyResult: {multiplyResult}</div>
      <div> divideResult: {divideResult}</div>
      <div> moduloResult: {moduloResult}</div>
      <div> powerResult: {powerResult}</div>
      <IfStatements />
      <IfExercise />
    </>
  );
}
