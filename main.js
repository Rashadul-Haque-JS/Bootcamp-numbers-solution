



/* Ticket Machine */
/*

function ticketMachine(age) {
    let price;
    if (age <= 17) {
        price = 10;
    }
    else if (age > 17) {
        if (age < 65) {
            price = 20;
        }else {
            price = 15;
        }
    }
    return price;
}

function main() {
    let age = 65;
    let payment = ticketMachine(age);
    console.log(payment);
}
main();

*/

//Exempel - sum To

/*
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
    let number = 10; // vilket som helst...
    let sumOfNumbers = sumTo(number);
    console.log(sumOfNumbers);
}

// Anropa function -> main

main();
*/

/* Example - Collatz Conjecture 

function CollatzConjecture(num) {

    let result;
    if (num % 2 == 0) {

        result = num / 2;
        resultOne = result / result;
    }
    else {

        result = (num * 3) + 1;
        resultOne = result / result;
    }
    return resultOne;
}

 
function main() {

    let num = 10;
    let result1 = CollatzConjecture(num);
    console.log(result1);
}

main();

*/

  




//const fibonacci = (number, x = 0, y = 1) => number === 0 ? x : fibonacci(number - 1, y, x + y);

//console.log(fibonacci(8))

// Exempel - Fibonacci

// lista : 1 1 2 3 5 8 13 21 ...
/*
function fibonacci(input){
    if (input <= 2) return 1;
    return fibonacci(input-1) + fibonacci(input-2);
}

function main() {
    let input = 8;
    let fibonacciTal = fibonacci(input);
    console.log(fibonacciTal);
}

// Anropa main

main(); */




/*
function main (){
    let number = 8;
    let sumn = fibonaccin(number);
    console.log(sumn);
}

main();

*/

// Exempel Collatz Conjecture

/*
function collatzConjecture(number) {   // Function number 1

    let iteration = 0;              // To define total iteration numbers in the whole proccess. But it's optional

    while (number != 1) {           // Condition for number of iteration
        
        if (number % 2 == 0) {     // Condition for Collatz Conjecture
            number = number / 2;
        }

        else {
            number = (number * 3) + 1;
        }
        
        console.log(number)
        
        iteration++
        
    }
    
    console.log('Total number of iteration is ' + iteration + '.'); // To know total number of iteration.
    
    return    // To store all logical directions /conditions in the 'Function number 1'. 
    
}

// Function number 2. To test 'Function number 1' using 'main function'. 

function main() {
    let number = 5;
    collatzConjecture(number);
    return
}
main(); */


