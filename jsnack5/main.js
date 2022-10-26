// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const list = [];

for ( i=0; i < 6; i++) {
    const number =  Number( prompt("Inserisci un numero"));

    if ( number % 2 === 1) {
        list.push(number);
    }
}

console.log(list);