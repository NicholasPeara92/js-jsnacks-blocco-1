// Il software deve chiedere per 10 volte all’utente di inserire un numero.
let add = 0;

for ( i=0; i <=10; i++) {
    const number =  Number( prompt("Inserisci un numero"));

    add= add + number;

}
// Il programma stampa la somma di tutti i numeri inseriti.
console.log(add);