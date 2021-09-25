/*function maxOfFour(input1, input2, input3, input4) {

    let output = input1;
    if (output < input2) {
        output = input2;
    }

    else if (output < input3) {
        output = input3;
    }

    else if (output < input4) {
        output = input4;
    }

    return output;
}

function main (){
    let maximum = maxOfFour(5, 4, 7, 90);
    console.log ('output of example-3 : ' + maximum);
}

main();
*/

console.log('------------') // To have a divider between result of two examples. Not related with func.

function maxOfFour(input1, input2, input3, input4)
{
    let output=input1;
    if (input2>output)
    output=input2;
    if (input3>output)
    output=input3;
    if(input4>output)
    output=input4;
    return output;
}
function main()
{
    let input1 = 2;
    let input2 = 41;
    let input3= 30;
    let input4 = 6;
    let result = maxOfFour(input1, input2, input3, input4);
    console.log('Result of example-3 : ' + result);
}
main();
