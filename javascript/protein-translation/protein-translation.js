//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  // Validate that received string has a complete number of condos
  if (rna.length % 3 != 0) {
    throw new Error('Invalid codon');
  }

  // Separate received string in subsets of 3
  let protein = (splittedArray = rna.match(/.../g));

  // iterate array

  // return converted array
  return protein;
};

export const TRANSLATION = {
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
