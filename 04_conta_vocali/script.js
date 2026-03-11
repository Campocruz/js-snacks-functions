/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = (inputStr) => {
  let count = 0;
  if (inputStr === null) { return }
  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr.charAt(i);
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++
    }
  }
  return count
}

// Invoca la funzione qui e stampa il risultato in console
const countedVowels = countVowels(word);
console.log(countedVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)