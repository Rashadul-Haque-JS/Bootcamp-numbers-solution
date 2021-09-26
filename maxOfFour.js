

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
    let input1 = 7;
    let input2 = 58;
    let input3= 73;
    let input4 = 16;
    let result = maxOfFour(input1, input2, input3, input4);
    console.log('Result of example-3 : ' + result);
}
main();
