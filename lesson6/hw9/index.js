let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];



function withdraw(clients, balances, client, anmount) {
    let indexOfArray;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            indexOfArray = i;
        }
    }
    return balances[indexOfArray] >= anmount ? balances[indexOfArray] = balances[indexOfArray] - anmount : -1;


}

//console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50));
//console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50));