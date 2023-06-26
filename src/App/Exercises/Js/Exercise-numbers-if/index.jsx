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

  return (
    <>
      <div> addResult: {addResult}</div>
      <div> substResult: {substResult}</div>
      <div> multiplyResult: {multiplyResult}</div>
      <div> divideResult: {divideResult}</div>
      <div> moduloResult: {moduloResult}</div>
      <div> powerResult: {powerResult}</div>
    </>
  );
}
