const isPrime = (number) => {
  if (number < 3) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

module.exports = { isPrime };
