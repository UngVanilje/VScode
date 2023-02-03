
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

let bubbleSort = function(array){
for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (array[j] > array[j + 1]) {
            swap(j, array)
            }
        }
    }
    return array.toString();
}
console.log(bubbleSort(list));

function swap(j, array){
    let temp = array[j];
    array[j] = array[j + 1];
    array[j+1] = temp;
}

// opgave1.3.js



let binarySearch = function(array, element){
    let found = false;
    let position = -1
    let left = 0;
    let right = array.length - 1;

while (left <= right && position === -1) {
    let middle = parseInt((left + right) / 2);
    let k = array[middle];
    if (k == element) {
        position = middle;
        return true;
        }
    if (k > element)
        right = middle - 1;
    else
        left = middle + 1;
    }
    return false;
}
console.log("Does array contain: " + binarySearch(list, 2));
console.log("Does array contain: " + binarySearch(list, 11));