export function PrototypesExercise() {
  //definiujemy funckje konstruktora Car
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  Object.prototype.getBrand = function () {
    return this.brand;
  };

  Object.prototype.getModel = function () {
    return this.model;
  };

  const myCar = new Car('Toyota', 'Supra');
  const myCar2 = new Car('Nissan', 'Skyline-R34');

  Array.prototype.newArrayMethod = function () {
    console.log('yes I am new global array method');
  };

  const exampleArray = [1, 2, 3];

  return (
    <div className="container--js-prototypes">
      Brand: {myCar.getBrand()}
      <br />
      Model: {myCar.getModel()}
      <br />
      <br />
      Brand: {myCar2.getBrand()}
      <br />
      Model: {myCar2.getModel()}
      <br />
      <br />
      Array: {exampleArray.newArrayMethod()}
    </div>
  );
}
