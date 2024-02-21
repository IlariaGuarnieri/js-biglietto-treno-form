//definizione
let nomeInventato1;
var nomeInvetato2;

//assegnamento
nomeInventato1 = "paolo";
nomeInvetato2 = 5;

//inizializzazione = definizion + assegnamento (in una unica riga)
const altroNomeInventato = "hello world"; 

// ********** inizio **********

const numKm ('Quanti km vuoi percorrere?');
console.log (numKm);

const etaPasseggero  ('Quanti anni hai? ');
console.log (etaPasseggero);

const prezzoPerKm = 0.21

let prezzoTotale = numKm * prezzoPerKm
console.log (prezzoTotale)

const btn1 = document.querySelector('.btn1');

btn7.addEventListener('click',function(){
  // resetto il titolo
  titoloInput.innerHTML = testoTitoloInput;
  // resetto il value dell'input
  input1.value = '';
})


if(etaPasseggero < 18){
  message = 'Sei un passeggero minorenne, hai diritto ad uno sconto del 20% e il tuo biglietto costa: '
  prezzoTotale = prezzoTotale - (prezzoTotale * 0.2)
}else if (etaPasseggero > 65){
  message = 'Sei un passeggero over 65, hai diritto ad uno sconto del 40% e il tuo biglietto costa: '
  prezzoTotale = prezzoTotale - (prezzoTotale * 0.4)
}else{
  message = 'il tuo biglietto ha un costo di: '
}

document.getElementById('output').innerHTML = message + prezzoTotale.toFixed(2);