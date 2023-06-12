const km = prompt('Inserisci il numero di km da percorrere'); 
const age = prompt('Inserisci la tua età');
let prezzoBiglietto = km * 0.21;
console.log(km);
console.log(age);

if (age <= 18) {
  x = prezzoBiglietto - ((prezzoBiglietto * 20) / 100);
 }
console.log(x);