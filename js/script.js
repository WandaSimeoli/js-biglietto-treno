const km = parseInt(prompt('Inserisci il numero di km da percorrere')); 
const age = parseInt(prompt('Inserisci la tua età'));
let prezzoBiglietto = km * 0.21;
console.log(km, typeof km);
console.log(age, typeof age);

 if(isNaN(age) || isNaN(km)){
    alert('Il valore inserito non è valido!')
 } else

if (age <= 18) {
  x = prezzoBiglietto - (prezzoBiglietto * 0.2);
 } else if (age >= 65) {
    x = prezzoBiglietto - (prezzoBiglietto * 0.4); 
 } else {
    x = prezzoBiglietto;
 }
console.log(x, typeof x);

document.querySelector('#my_id').innerHTML = x.toFixed(2)
