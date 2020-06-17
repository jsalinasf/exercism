//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (arr, sourceBase, targetBase) => {
  let returnArr = [];

  function toDecimal(initialArray, fromBase) {
    let accumulator = 0;
    for (let i = 0; i < initialArray.length; i++) {
      let power = arr.length - 1 - i;
      let sum = arr[i] * Math.pow(fromBase, power);
      accumulator += sum;
    }
    accumulator = String(accumulator).split('');
    accumulator = accumulator.map((item) => Number(item));
    return accumulator;
  }

  function fromDecimal(initialArray, toBase) {
    let accumulator = '';
    let num = Number(initialArray.join(''));
    while (num > 0) {
      accumulator += num % toBase;
      num = Math.trunc(num - num / toBase);
    }
    accumulator = accumulator.split('').reverse();
    accumulator = accumulator.map((item) => Number(item));
    return accumulator;
  }

  //////////////////
  // Edge Cases
  //////////////////

  // first base is one
  // first base is zero
  // first base is negative
  if (sourceBase <= 1) {
    throw new Error('Wrong input base');
  }

  // second base is one
  // second base is zero
  // second base is negative
  if (targetBase <= 1) {
    throw new Error('Wrong output base');
  }

  // both bases are negative
  if (sourceBase < 0 && targetBase < 0) {
    throw new Error('Wrong input base');
  }

  // Empty List
  if (arr[0] === 0 && arr.length === 1) {
    return [0];
  }

  // Single 'zero'
  if (arr.length === 1 && arr[0] === 0) {
    return [0];
  }

  // Multiple 'zeros'
  if (arr.filter((item) => item > 0).length === 0) {
    throw new Error('Input has wrong format');
  }

  // Leading Zeros
  if (arr[0] === 0) {
    throw new Error('Input has wrong format');
  }

  // missing input base throws an error
  if (typeof sourceBase === 'undefined') {
    throw new Error('Wrong input base');
  }

  // wrong input_base base not integer
  if (!Number.isInteger(sourceBase)) {
    throw new Error('Wrong input base');
  }

  // missing output base throws an error
  if (typeof targetBase === 'undefined') {
    throw new Error('Wrong output base');
  }
  // wrong output_base base not integer
  if (!Number.isInteger(targetBase)) {
    throw new Error('Wrong output base');
  }

  // Invalid Positive digit
  if (arr.filter((item) => item >= sourceBase).length > 0) {
    throw new Error('Input has wrong format');
  }

  // Negative Digits
  if (arr.filter((item) => item < 0).length > 0) {
    throw new Error('Input has wrong format');
  }

  //////////////////
  // Converters
  //////////////////

  // From Base 10
  if (sourceBase === 10) {
    returnArr = fromDecimal(arr, targetBase);
  }

  // To Base 10
  if (targetBase === 10) {
    returnArr = toDecimal(arr, sourceBase);
  }

  return returnArr;
};

// console.log(convert([1, 1, 1, 1, 1, 1, 1, 1], 2, 10)); //255
// console.log(convert([1, 1, 1, 0, 1], 2, 10)); // 29
// console.log(convert([2, 2, 1], 3, 10)); // 25
// console.log(convert([1], 2, 10)); // 1
// console.log(convert([1, 0, 1, 0, 1, 0], 2, 10)); // [4,2]
// console.log(convert([4, 2], 10, 2)); // [1, 0, 1, 0, 1, 0]
// console.log(convert([5], 10, 2)); // [1, 0, 1]
// console.log(convert([0], 10, 2)); // [0]
