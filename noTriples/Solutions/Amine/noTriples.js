const noTriples = (array) => {
    for (let i = 0; i< array.length - 2; i++) {
        if (array[i] === array[i+1] && array[i] === array[i+2]) {
            return false;
        }
    }
    return true;
}

console.log(noTriples([1,1,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]))