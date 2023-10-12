// What will be the console output when we call the function foobar()?
var foo = 1
var foobar = function () {
    console.log(foo)
    var foo = 2
}

foobar()

// Whats the console output of this two console log statements and way?
console.log('1' == 1)
console.log('1' === 1)

// What is wrong in this algorithm? Find the problem without executing the function
function findLargestPrime(limit) {
    let largestPrime = 0;
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j !== 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            largestPrime = i;
        }
    }
    return largestPrime;
}

const limit = 20;
const result = findLargestPrime(limit);
console.log(`The largest Prim-Number smaller oder equal ${limit} is: ${result}`);