/*
Ciao ragazzi,
Esercizio di oggi:
nome repo: js-paliedispari

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/

const parolaUtente = prompt("Inserisci una parola: ");

function palindroma(parola) {

    const parolaInvertita = parola.split("").reverse().join("");

    if (parola === parolaInvertita) {
        return true;
    } else {
        return false;
    }
}

  if (palindroma(parolaUtente)) {
        console.log("La parola è palindroma!");
    } else {
        console.log("La parola non è palindroma.");
    }

