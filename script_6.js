const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

const serine = ['UCU','UCC','UCA','UCG','AGU','AGC'];
const proline = ['CCU', 'CCC', 'CCA','CCG'];
const leucine = ['UUA', 'UUG'];
const phenylalanine = ['UUU', 'UUC'];
const arginine = ['CGU','CGC', 'CGA','CGG','AGA','AGG'];
const tyrosine = ['UAU', 'UAC'];



function arnToAmines (arn) {
  
  let myArnAmine = [];
  stringToArray(arn).forEach(codon => {
    let tempo = codonToAmine(codon);
    console.log(tempo);
    myArnAmine.push(tempo); });
  
  return myArnAmine.join('-')
}



function codonToAmine (codon) {
  switch (true) {
    case serine.includes(codon):
      return 'Sérine';

    case proline.includes(codon):
      return 'Proline';

    case leucine.includes(codon):
      return 'Leucine';

    case phenylalanine.includes(codon):
      return 'Phénylalanine';

    case arginine.includes(codon):
      return 'Arginine';

    case tyrosine.includes(codon):
      return 'Tyrosine';

    default:
    return 'X';

  }
}


function stringToArray (arn) {
  let temp = arn.match(/.{1,3}/g);
  console.log(temp);
  return temp; }

// Conversion
console.log( arnToAmines(arn1) );
console.log( arnToAmines(arn2) );