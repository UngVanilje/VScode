// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];



for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16


let findTallet = function (arr, x, start, end){
    if (start > end) return -1;

    let mid = Math.floor((start+end)/2);

    if (arr[mid] === x) return mid;

    if (arr[mid]>x) return findTallet(arr, x, start, mid-1);
    else return findTallet(arr, x, mid+1, end);
}

console.log(findTallet(list,13,0,list.length-1))