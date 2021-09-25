/*Example 1*/

console.log('------------') // To have a divider between result of two examples. Not related with func.

function minOfTwo(input1, input2) {
    let output;
    if (input1 < input2) {
        output = input1;
    }
    else {
        output = input2;
    }
    return output;
}


function main() {
    let minimum = minOfTwo(10,1 );
    console.log('Result of example-1: ' + minimum);
}

main();
