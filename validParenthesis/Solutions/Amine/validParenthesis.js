const validParenthesis = (str) => {
    let myArray = str.split('');
    let dupArray = [... myArray]; // I'm guessing we need the original array

    let copyArray = myArray.map(element => { //this with the fellowing if statement for invalid input
        if (element === ')') {
            element = '(';
        }
        return element;
    });
    if (!copyArray.every(element => element === '(')) { // for invald input
        console.log('Invalid input');
        return;
    }

    for (let i = 0; i < dupArray.length-1; i++) {
        if (dupArray[i] === '(' && dupArray[i+1] === ')') {
            dupArray.splice(i, 2);
            i -= 2;
        }
    }
    
    if (!dupArray.length) {
        return true;
    }
    return false;
}

console.log(validParenthesis('(())((()())())'))