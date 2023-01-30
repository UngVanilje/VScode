// mergeSort
const list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
const list2 = [3, 6, 7, 10, 11, 0, 17, 9, 22, 23];

list.sort((a,b) => a - b);
list2.sort((a,b) => a - b);
console.log("List one: " + list.toString());
console.log("List two: " + list2.toString());

let mergeList = function(l1, l2){
    let result = new Array;
    i1 = 0;
    i2 = 0;

    while(i1 < l1.length && i2 < l2.length){
    if(l1[i1] <= l2[i2]){
        result.push(l1[i1]);
        i1++;
        } else {
        result.push(l2[i2]);
        i2++;
        }
    }
while(i1 < l1.length){
    result.push(l1[i1]);
    i1++;
}

while(i2 < l2.length){
    result.push(l2[i2]);
    i2++;
}
return result;
}

console.log("Merged list: " + mergeList(list,list2).toString());





