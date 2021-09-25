
console.log('------------') // To have a divider between result of two examples. Not related with func.


function ticketMachine(age) {
    let ticketPrice;
    if (age < 18) {
        ticketPrice = 10;
    }
    else if (age > 64) {
        ticketPrice = 15;
    }

    else {
        ticketPrice = 20;
    }

    return ticketPrice;
}

function main() {
    let age = 68;
    toPay = ticketMachine(age);
    console.log('Ticket price for the person :' + toPay);
}

main();