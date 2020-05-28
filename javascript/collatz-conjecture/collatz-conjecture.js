//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number, counter = 0) => {
  // if number is less or equal to zero, throw error
  if (number <= 0) throw new Error('Only positive numbers are allowed');

  // recursive condition to stop calling itself
  if (number === 1) {
    return counter;
  } else {
    // call itself until condition is met
    // counter is used to count and pass the steps on every call
    counter++;
    if (number % 2 === 0) {
      return steps(number / 2, counter);
    } else {
      return steps(3 * number + 1, counter);
    }
  }
};

// all tests have been passed
