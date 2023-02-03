//Compare strings
let compare = function(s1, s2){
    if(s1 > s2){
        return 1;
    } 
    else if(s1 < s2){
        return -1;
    }
    else
    return 0;
}

console.log(compare("Gay", "Ultra gay"));

//Compare strings based on length
let compareLength = function(s1, s2){
    if(s1.length > s2.length){
        return 1;
    } else if(s1.length < s2.length){
        return -1;
    }
    else{
        return 0;
    }
}
console.log(compareLength("Mega gay", "Gay"));

//Compare strings not caring for upper/lowercase

let compareIgnoreCase = function(s1, s2){
    if(s1.toUpperCase() > s2.toUpperCase()){
        return 1;
    } else if(s1.toLowerCase() < s2.toLowerCase()){
        return -1;
    }
    else{
        return 0;
    }
}
console.log(compareIgnoreCase("Mega Gay", "mega gay"));
console.log(compareIgnoreCase("Mega Gay", "Ultra gay"));

//Bubblesort with compare
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let list2 = ["Jørgen", "Peter", "Karsten", "Ole", "Klaus"]

let bubbleSort = function(array, compare){
for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (compare(array[j], array[j + 1]) > 0) {
            swap(j, array)
            }
        }
    }
    return array.toString();
}
console.log(bubbleSort(list, compare));
console.log(bubbleSort(list2, compare))
console.log(bubbleSort(list2, compareLength))


function swap(j, array){
    let temp = array[j];
    array[j] = array[j + 1];
    array[j+1] = temp;
}