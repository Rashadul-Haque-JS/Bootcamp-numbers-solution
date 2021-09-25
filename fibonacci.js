console.log('------------') // To have a divider between result of two examples. Not related with func.

function  fibonacci (input) {
    if (input <= 2) return 1;
    return fibonacci (input-1) + fibonacci (input-2);
}

function main () {
    let input = 8;
    let fibonacciTal = fibonacci (input);
    console.log  ('Fibonacci output of the number is :' + fibonacciTal);
}

// Anropa main

main();
