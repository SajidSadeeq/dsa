/*
    this is basic example to tell computer run a function and find some name e.g. nemo from array
*/

const name = ["nemo"]

function findNemo(array) {

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo'){
            console.log("found nemo");
        }
    }
}

findNemo(name);