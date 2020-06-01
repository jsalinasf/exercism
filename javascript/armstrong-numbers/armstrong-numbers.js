//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const arr = String(num).split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(Number(arr[i]), arr.length);
  }
  if (num === sum) return true;
  return false;
};
