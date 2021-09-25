/*Example-2 */

console.log('------------') // To have a divider between result of two examples. Not related with func.

function minOfThree(input1, input2, input3) {
    let output;
    if (input1 < input2) {
        output = input1;
        if (output < input3){
            output = output;
        }
        else {
            output = input3;
        }
        return output
    }
    else {
        output = input2;
    }
    return output;
}

function main (){
    let minimum = minOfThree(5, 8, 7);
    console.log ('Result of example-2 : ' + minimum);
}

main();
