export function JsThisKeywordsExercise() {
  // Przykład nr 1 - wywołanie w kontekście globalnym
  console.log(this); // this odnosi sie do globalnego obiektu (w przeglądarce w Vanilla JS)

  // Przykład nr 2 - wywołanie w kontekście funckji
  console.log(this);
  function thisContext() {
    return console.log(this);
  }
  thisContext();

  // Przykład nr 3 - wywołanie w kontekście obiektu
  // zwróci nam wartość property "name" - Adrian
  const person = {
    name: 'Adrian',
    sayHello() {
      console.log(this.name);
    },
    typicalJSFunction: function () {
      console.log(this.name);
    },
    arrowJSFunction: () => console.log(this?.name),
  };
  person.sayHello(); // zwróci name wartosc property "name" - Adrian
  person.typicalJSFunction(); // zwroci name wartosc property "name" - Adrian
  person.arrowJSFunction(); // zwroci name wartosc property "name" - undefined

  // bind function example()
  const arrowFunctionsThis = person.arrowJSFunction;
  const callsArrowFunction = arrowFunctionsThis.bind(person); // Bind() nie pomoze na kontekst this w przypadku arrow function
  callsArrowFunction();

  // Przykład nr 4 - wywołanie w kontekście klasy
  // this umoliwia dostęp do właściwości konstruktora
  class Car {
    constructor(make) {
      this.make = make;
    }
    getMake() {
      console.log(this.make);
    }
  }
  const myCar = new Car('Toyota');
  myCar.getMake();

  // Call() przykłąd implementacji funkcji
  const personTwo = {
    name: 'Maciej',
    sayHello() {
      return `My name is: ${this.name}`;
    },
  };

  const personThree = {
    name: 'Matthiew',
  };
  console.log(personTwo.sayHello.call(personThree));

  // Apply() przykład implementacji funkcji
  function introduce(age) {
    return `My name is ${this.name} and I'm ${age} years old`;
  }
  console.log(introduce.apply(personThree, [28]));

  return (
    <div className="container--js-this">
      <button onClick={callsArrowFunction}>Click</button>
    </div>
  );
}
