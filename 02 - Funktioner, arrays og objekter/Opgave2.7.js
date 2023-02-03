
//Funktion der finder højeste værdi
let array = [0, 1, 2, 3, 4, 5];

array.maxValue = function(){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        if(max <= array[i])
        max = array[i];
    }
    return max;
}
console.log("Max value in array: " + array.maxValue());

//Funktion der tjekker om element er i array
array.Contains = function(element){
    let found = false;
    for (let i = 0; i < array.length; i++){
        if(array[i] === element){
            found = true;
            return "Element found: " + found;
        }
    }
    return "Element found: " + found;
}
console.log(array.Contains(2));
console.log(array.Contains(6));

//Funktion der finder summen

array.sumArray = function(){
    let sum = 0;
    for(let i = 0; i < array.length;i++){
        sum += array[i];
    }
    return "Samlet værdi for array: " + sum;
}

console.log(array.sumArray());
