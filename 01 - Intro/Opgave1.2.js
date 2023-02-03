// bubbleSort.js
let list1 = ["Ole, Per, Søren, Jesper, Karsten, Børge"];

for (let i = list1.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list1[j] > list1[j + 1]) {
            let temp = list1[j];
            list1[j] = list1[j+1];
            list1[j+1] = temp;
        }
    }
}
console.log(list1.toString()); 