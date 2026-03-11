/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const checkChar = (inputArr, inputChar) => {
  const outputArr = [];
  if (inputArr === null) { return }
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].charAt(0) === inputChar) {
      outputArr.push(inputArr[i]);
    }
  }
  return outputArr
}

// Invoca la funzione qui e stampa il risultato in console
const checkedChar = checkChar(names, 'A');
console.log(checkedChar);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]