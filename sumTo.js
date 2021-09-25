
//Exempel - sum To
console.log('------------') // To have a divider between result of two examples. Not related with func.

function sumTo(number) {
    let result;
    const addInt = 1;
    const divInt = 2;

    let number2 = number + addInt;
    let number3 = number / divInt;
    result = number2 * number3;
    return result
}

function main() {
    let number = 100; // vilket som helst...
    let sumOfNumbers = sumTo(number);
    console.log('Result of example-4 : ' + sumOfNumbers);
}

// Anropa function -> main

main();
