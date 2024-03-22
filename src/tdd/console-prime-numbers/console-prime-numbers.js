const number = process.argv[2];

const { isPrime } = require("../prime-numbers/prime-numbers");

console.log(
  `Your number, ${number} is${isPrime(number) ? "" : " not"} a prime number`,
);
