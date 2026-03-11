/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const shortedName = (inputArr) => {
  console.log('in the function');
  const outputArr = [];
  if(inputArr === null) {return}
  console.log('no return');
  for(let i = 0; i < inputArr.length; i++){
    outputArr.push(inputArr[i].charAt(0));
  }
  return outputArr
}

// Invoca la funzione qui e stampa il risultato in console
const shortName = shortedName(names);
console.log(shortName);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]