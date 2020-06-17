//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//export
const convert = (arr, sourceBase, targetBase) => {
  let returnArr = [];

  function toDecimal(initialArray, fromBase) {
    let accumulator = 0;
    for (let i = 0; i < initialArray.length; i++) {
      let power = arr.length - 1 - i;
      let sum = arr[i] * Math.pow(fromBase, power);
      accumulator += sum;
    }
    accumulator = String(accumulator).split('');
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
    return accumulator;
  }

  if (sourceBase === 10) {
    returnArr = fromDecimal(arr, targetBase);
  }

  if (targetBase === 10) {
    returnArr = toDecimal(arr, sourceBase);
  }

  return returnArr;

  //throw new Error("Remove this statement and implement this function");
};

console.log(convert([1, 1, 1, 1, 1, 1, 1, 1], 2, 10)); //255
console.log(convert([1, 1, 1, 0, 1], 2, 10)); // 29
console.log(convert([2, 2, 1], 3, 10)); // 25
console.log(convert([4, 2], 10, 2)); // [1, 0, 1, 0, 1, 0]
