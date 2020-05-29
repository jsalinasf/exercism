//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arr) => {
  // extract items to decode from the received array
  const decodeArr = arr.slice(0, 2);

  // decode items, join the resultant array into a string, convert it to number and return it
  return Number(decodeArr.map((element) => COLORS[element]).join(''));
};

export const COLORS = {
  // equivalency chart
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
