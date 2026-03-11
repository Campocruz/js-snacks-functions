/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const d = new Date();

// Dichiara la funzione qui.
const userWelcome = (inputName) => {
  if (inputName === null) { return }
  const hour = d.getHours();
  let internalStr;
  if (hour > 17) {
    internalStr = `Buonasera ${inputName} sono le ore ${hour}`;
  } else if (hour < 13) {
    internalStr = `Buongiorno ${inputName} sono le ore ${hour}`;
  } else {
    internalStr = `Buon Pomeriggio ${inputName} sono le ore ${hour}`;
  }
  return internalStr
}

// Invoca la funzione qui e stampa il risultato in console
const nameWelcome = userWelcome(name);
console.log(nameWelcome);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.