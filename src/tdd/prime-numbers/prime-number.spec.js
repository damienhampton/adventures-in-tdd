const { expect } = require("chai");
const { isPrime } = require("./prime-numbers");

/**
 * a number is prime if it is only divisible by itself and 1
 * 0, 1 and 2 are special cases and not considered prime
 * e.g.
 *  3 - divisible only by 1 and 3 - prime
 *  4 - divisible by 1, 4 AND 2 - not prime
 */

const addTestCase = (number, result) => ({ number, result });

// Writing prime number func, guided by tests... (code written one test a time)

describe("prime numbers", () => {
  [
    addTestCase(0, false),
    addTestCase(1, false),
    addTestCase(2, false),
    addTestCase(3, true),
    addTestCase(4, false),
    addTestCase(100, false),
    addTestCase(133, false),
    addTestCase(1259, true),
  ].forEach(({ number, result }) => {
    it(`should return ${result} for ${number}`, () => {
      expect(isPrime(number)).to.equal(result);
    });
  });
});
