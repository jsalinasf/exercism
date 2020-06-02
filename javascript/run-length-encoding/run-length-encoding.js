export const encode = (str) => {
  let encodedString = '';

  // compare character n with character n+1 and subsequent ones using two loops
  // start outer loop
  for (let i = 0; i < str.length; i++) {
    // reset counter to 1
    let counter = 1;
    // start inner loop
    for (let j = i + 1; j <= str.length; j++) {
      // if equal, increase counter for current character
      if (str[i] === str[j]) {
        counter++;
      } else {
        // if counter === 1, add character (n) to main Encoded String
        if (counter === 1) {
          encodedString += str[i];
        }
        // else, add counter + character (n) to main Encoded String
        else {
          encodedString += String(counter) + str[i];
        }
        // update i index
        i = j - 1;
        break;
      }
    }
  }
  return encodedString;
};

// decode should work for numbers composed of more than 2 digits also
export const decode = (str) => {
  let decodedString = '';
  let repetitions = '';

  for (let i = 0; i < str.length; i++) {
    // is current character a number?
    if (str[i].match(NUMBERS)) {
      if (repetitions.length < 2) repetitions = str[i];
      // is next character also a number?
      if (str[i + 1].match(NUMBERS)) {
        repetitions += str[i + 1];
        continue;
      }
      // add (n+1) times (n) character to decodedString
      decodedString += str[i + 1].repeat(Number(repetitions));
      repetitions = '';
      // move loop index to next (n+1) character
      i++;
    } else {
      // add current character (n) to decodedString and keep iterating through the loop
      decodedString += str[i];
    }
  }
  return decodedString;
};

export const NUMBERS = /^[0-9]+$/;
