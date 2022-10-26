// L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("Inserisci la prima parola");

const secondWord = prompt("Inserisci la seconda parola");


// Il software stampa prima la parola più corta, poi la parola più lunga.

if ( firstWord.length > secondWord.length ) {
    console.log(secondWord,firstWord);
} else if ( firstWord.length < secondWord.length ) {
    console.log(firstWord, secondWord);
} else {
    console.log("Le parole hanno la stessa lunghezza");
}