//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arr) => {
  // equivalence table
  const COLORS = {
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
  // remove additional items from the received array
  arr.splice(2);
  // decode element, join the resultant array to a string, convert it into a number
  return parseInt(arr.map((element) => COLORS[element]).join(''));
};
