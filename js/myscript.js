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








