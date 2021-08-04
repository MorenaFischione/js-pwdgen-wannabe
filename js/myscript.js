var nome = prompt("Inserisci il tuo nome");
console.log(nome);
document.getElementById("nome").innerHTML = nome ;
var cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);
document.getElementById("cognome").innerHTML = cognome ;
var colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);
document.getElementById("colore-preferito").innerHTML = colorePreferito ;

document.getElementById("password-generata").innerHTML= nome + cognome + colorePreferito + "21";

var mese = "settembre";
var anno = "1984";
var giorno = "13";
var età = 2021;

document.getElementById("data-nascita").innerHTML= giorno + mese + anno;

document.getElementById("età").innerHTML = età - anno;
console.log ("eta");


var mele =  parseInt( prompt("numero di mele acquistate"));
var prezzoCadauna = parseInt( prompt("prezzo di cadauna mela"));
var risultato = parseInt (mele * prezzoCadauna);    

document.getElementById("numero").innerHTML = mele;
document.getElementById("prezzo").innerHTML = prezzoCadauna;
document.getElementById("risultato").innerHTML = mele * prezzoCadauna

var sconto = 10;
document.getElementById("sconto").innerHTML=sconto;
var meleScontate = risultato * 10 /100;
document.getElementById("mele-scontate").innerHTML=meleScontate;

document.getElementById("prezzo-def").innerHTML= risultato - meleScontate;








