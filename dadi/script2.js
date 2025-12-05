/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
*/

// 1. Scelta dell'utente
const sceltaUtente = prompt("Scegli: 'pari' o 'dispari'");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// 2. Funzione per numero random 1-5
function numeroRandom(numero) {
    return Math.floor(Math.random() * 5) + 1;
}

// Numero generato per il computer
const numeroComputer = numeroRandom();
console.log("Numero utente:", numeroUtente);
console.log("Numero computer:", numeroComputer);

// 3. Somma
const somma = numeroUtente + numeroComputer;
console.log("Somma:", somma);

// 4. Funzione per verificare se un numero è pari
function isPari(num) {
    return num % 2 === 0;
}

// 5. Stabilire il vincitore
const risultato = isPari(somma) ? "pari" : "dispari";

if (risultato === sceltaUtente) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

