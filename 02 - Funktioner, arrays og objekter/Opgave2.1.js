
//Funktion der finder højeste værdi
let array = [0, 1, 2, 3, 4, 5];

let maxValue = function(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(max <= arr[i])
        max = arr[i];
    }
    return max;
}
console.log("Max value in array: " + maxValue(array));

//Funktion der tjekker om element er i array
let contains = function(arr, element){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return "Element found: " + true;
        }
    }
    return "Element found: " + false;
}
console.log(contains(array,2));
console.log(contains(array, 6));

//Funktion der finder summen

let sumArray = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return "Samlet værdi for array: " + sum;
}

console.log(sumArray(array))

