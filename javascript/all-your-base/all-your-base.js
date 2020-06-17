//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//export
const convert = (arr, originalBase, targetBase) => {
  let returnArr = [];

  if (targetBase === 10) {
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) {
      let power = arr.length - 1 - i;
      let sum = arr[i] * Math.pow(originalBase, power);
      accumulator += sum;
    }
    returnArr = String(accumulator).split('');
  }

  return returnArr;

  //throw new Error("Remove this statement and implement this function");
};

console.log(convert([1, 1, 1, 1, 1, 1, 1, 1], 2, 10)); //255
console.log(convert([1, 1, 1, 0, 1], 2, 10)); // 29
