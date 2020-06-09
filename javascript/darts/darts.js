export const score = (xp, yp) => {
  const points = 0;
  const distance = Math.sqrt(Math.pow(xp - XC, 2) + Math.pow(yp - YC, 2));
  console.log(distance);
  if (distance <= 1) {
    return 10;
  } else if (distance <= 5) {
    return 5;
  } else if (distance <= 10) {
    return 1;
  } else {
    return points;
  }
};

// X coordinate for center
export const XC = 0;
// Y coordinate for center
export const YC = 0;
