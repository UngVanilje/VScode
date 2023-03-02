let funnyBone=['Gewir', 'Krølle', 'Bill', 'Gaylord', 'Farquad']

let compareBitches= (compare) =>{
    return (list) => {(list.sort((a, b) => compare(a, b)))};
}


let sorterBitches = funnyBone.sort((a, b) => a.localeCompare(b));
    console.log(funnyBone + ", ");


let sorterLongestBitch = funnyBone.sort((a, b) => b.length - a.length);
console.log(funnyBone + ", ");


let noUpperCaseBitch = funnyBone.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(funnyBone + ", ");


//Valider bitches
let compareBitchesError = (compare) =>{
    if(typeof compare !== 'function'){
        throw new Error('compare must be a function')
    }
    return (list) => {(list.sort((a, b) => compare(a, b)))};
}
    