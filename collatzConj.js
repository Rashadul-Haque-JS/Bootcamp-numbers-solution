
// Exempel Collatz Conjecture
console.log('------------') // To have a divider between result of two examples. Not related with func.
console.log('Output of Collatz Conjecture : '); // This line is also for extra info...



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
    let number = 10;
    collatzConjecture(number);
    return
}
main(); 


