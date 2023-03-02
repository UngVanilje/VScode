//Functions
function double(x) {
    return x * 2;
  }
  
  function square(x) {
    return x * x;
  }

  function addTwo(x) {
    return x + 2;
  }

//9.4 a
let compose1 = (f1, f2, a) => {
    return f1(f2(a));
}
  
  let result = compose1(square, double, 5); // Beregner square(double(5))
  console.log(result); // Resultat: 100

//9.4 b
let compose2 = (f1, f2) => {
    return ((x) => f1(f2(x)))
}

let result2 = compose2(square, double); // Beregner square(
console.log(result2(5)); // Resultat: 100

//9.4 c
function composeFunctions(functions) {
    return function (x) {
      return functions.reduce(function (acc, f) {
        return f(acc);
      }, x);
    };
  }
  
  let allDaFunk = [double, addTwo, square];
  let composedFunction = composeFunctions(allDaFunk);
  let resultComposed = composedFunction(3); // Beregner square(addTwo(double(3)))
  console.log(resultComposed); // Resultat: 64