/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
const userWelcome = (name) => { return 'Hello ' + name; }

// Invoca la funzione qui e stampa il risultato in console
const helloName = userWelcome(userName);
console.log(helloName);
//Risultato atteso se si passa 'Mario': // ciao Mario
