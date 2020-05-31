export const translate = (rna) => {
  // initialize array to return
  const protein = [];

  // edge cases

  // if received string is empty return empty array
  if (!rna) return protein;

  // if received string length is not a multiple of 3
  // condos are incomplete thus throw error
  if (rna.length % 3 != 0) {
    throw new Error('Invalid codon');
  }

  // algorithm

  // separate received string in subsets of 3
  let splittedArray = rna.match(/.../g);

  // iterate array of codons
  for (let i = 0; i < splittedArray.length; i++) {
    let element = splittedArray[i];
    // is current condo found on the equivalency table?
    if (TRANSLATION.hasOwnProperty(element)) {
      // is current condo a stop signal?
      if (TRANSLATION[element] === 'STOP') {
        return protein;
      }
      // decode Condo, add it to protein array
      protein.push(TRANSLATION[element]);
    } else {
      // Condo not found on equivalency table, throw error
      throw new Error('Invalid codon');
    }
  }
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
  UGA: 'STOP',
  UAG: 'STOP',
};
