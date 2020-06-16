export const toRoman = (num) => {
  let roman = '';

  if (num > 999) {
    let digit = Math.trunc(num / 1000);
    roman = 'M'.repeat(digit);
    num = num % 1000;
  }

  if (num > 99) {
    let digit = Math.trunc(num / 100);
    if (digit === 9) {
      roman += 'CM';
    } else if (digit > 5 && digit < 9) {
      roman += 'D' + 'C'.repeat(digit - 5);
    } else if (digit === 5) {
      roman += 'D';
    } else if (digit === 4) {
      roman += 'CD';
    } else {
      roman += 'C'.repeat(digit);
    }
    num = num % 100;
  }

  if (num > 9) {
    let digit = Math.trunc(num / 10);
    if (digit === 9) {
      roman += 'XC';
    } else if (digit > 5 && digit < 9) {
      roman += 'L' + 'X'.repeat(digit - 5);
    } else if (digit === 5) {
      roman += 'L';
    } else if (digit === 4) {
      roman += 'XL';
    } else {
      roman += 'X'.repeat(digit);
    }
    num = num % 10;
  }

  if (num > 0) {
    let digit = num;
    if (digit === 9) {
      roman += 'IX';
    } else if (digit > 5 && digit < 9) {
      roman += 'V' + 'I'.repeat(digit - 5);
    } else if (digit === 5) {
      roman += 'V';
    } else if (digit === 4) {
      roman += 'IV';
    } else {
      roman += 'I'.repeat(digit);
    }
  }

  return roman;
};
