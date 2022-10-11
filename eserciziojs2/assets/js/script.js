var nome = 'Aldo';
let cliente = 'cliente';
const numero = 3.14;
document.getElementById('concatena').innerHTML = `${nome}, ${cliente}, ${numero}`;



//----------------------


var concatena1 = `${nome}, ${cliente}, ${numero}`;
document.getElementById('concatena2').innerHTML = concatena1;



//----------------------


var username = 'Mario';
document.getElementById('var').innerHTML = username;

{
let username = 'Carla';
document.getElementById('let').innerHTML = username;
}

document.getElementById('final').innerHTML = username;


//---------------------



var username2 = 'Mario';
document.getElementById('let2').innerHTML = username2;
{
let username2 = 'Carla'
document.getElementById('let3').innerHTML = username2;
document.getElementById('final2').innerHTML = username2;
}



//-------------------

var valoreIniziale = 15;
var addizione = valoreIniziale + valoreIniziale;
var sottrazione = valoreIniziale -10;
var incremento = valoreIniziale + valoreIniziale + 1;
var sottrazione = valoreIniziale - 10;
var decremento = valoreIniziale -10 -1;
var moltiplicazione = valoreIniziale * 3;
var divisione = valoreIniziale /3;



document.getElementById('iniziale').innerHTML = `Valore iniziale: ${valoreIniziale}`;

document.getElementById('valore1').innerHTML = `Addizione e incremento: ${addizione}, ${incremento}`;

document.getElementById('valore2').innerHTML = `Sottrazione e decremento: ${sottrazione}, ${decremento}`;

document.getElementById('valore3').innerHTML = `Moltiplicazione: ${moltiplicazione}`;

document.getElementById('valore4').innerHTML = `Divisione: ${divisione}`;

document.getElementById('valore5').innerHTML = `Concatenazione: ${valoreIniziale} è un numero`;
