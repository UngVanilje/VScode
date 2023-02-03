function isPrime(number) {
    if (number == 2 || number == 3)
      return true;
    if (number <= 1 || number % 2 == 0 || number % 3 == 0)
      return false;
    for (let i = 5; i * i <= number ; i+=6)
      if (number % i == 0 || number % (i + 2) == 0)
        return false;
    return true;
  }

let primeUpTo = function(limit){
    let arr = new Array;
    for (let index = 0; index < limit; index++) {
        if (isPrime(index)){
            arr.push(index)
        }
    }
    return arr.toString()
}

console.log(primeUpTo(15))