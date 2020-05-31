//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  // initialize array to return
  const protein = [];

  // Edge Cases

  // if received string is empty return empty array
  if (!rna) return protein;

  // if received string length is not a multiple of 3
  // condos are incomplete thus otherwise throw error
  if (rna.length % 3 != 0) {
    throw new Error('Invalid codon');
  }

  // Decode algorithm

  // separate received string in subsets of 3
  let splittedArray = rna.match(/.../g);

  // iterate array of Codons
  splittedArray.forEach((element) => {
    if (TRANSLATION.hasOwnProperty(element)) {
      // decode Condo, add it to protein array
      protein.push(TRANSLATION[element]);
    } else {
      // Condo not found, throw error
      throw new Error('Invalid codon');
    }
  });
  // return converted array
  return protein;
};

export const TRANSLATION = {
  // Equivalency Table: Condos - Proteins
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAA: 'STOP',
  UAA: 'STOP',
};

console.log(translate('UUUUUC'));
