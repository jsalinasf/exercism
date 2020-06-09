export const score = (xp, yp) => {
  // initialize points to zero
  let points = 0;
  // use math "distance formula" to see how far the dart landed from the center
  const distance = Math.sqrt(Math.pow(xp - XC, 2) + Math.pow(yp - YC, 2));
  // assign points based on distance
  if (distance <= 1) {
    // inner circle
    points = 10;
  } else if (distance <= 5) {
    // middle circle
    points = 5;
  } else if (distance <= 10) {
    // outter circle
    points = 1;
  } else {
    // out of target
    points = 0;
  }

  return points;
};

// X coordinate for center
export const XC = 0;
// Y coordinate for center
export const YC = 0;
