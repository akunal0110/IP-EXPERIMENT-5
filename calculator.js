
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === '+') {
            resolve(num1 + num2);
        } else if (operation === '-') {
            resolve(num1 - num2);
        } else if (operation === '*') {
            resolve(num1 * num2);
        } else if (operation === '/') {
            if (num2 === 0) {
                reject('Error: Division by zero is not allowed.');
            } else {
                resolve(num1 / num2);
            }
        } else {
            reject('Error: Invalid operation.');
        }
    });
}


calculator(10, 2, '+')
    .then(result => console.log('Addition:', result))
    .catch(error => console.log(error));

calculator(10, 2, '/')
    .then(result => console.log('Division:', result))
    .catch(error => console.log(error));

calculator(10, 0, '/')
    .then(result => console.log(result))
    .catch(error => console.log(error));

class SquareIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.index = 0;
    }

    next() {
        if (this.index < this.numbers.length) {
            const result = { value: this.numbers[this.index] ** 2, done: false };
            this.index++;
            return result;
        } else {
            return { value: undefined, done: true };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

const numbers = [1, 2, 3, 4, 5];
const squareIterator = new SquareIterator(numbers);

for (let square of squareIterator) {
    console.log('Square:', square);
}

function* primeGenerator(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

// Test the prime number generator
const primes = primeGenerator(30);
for (let prime of primes) {
    console.log('Prime:', prime);
}
