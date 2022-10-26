// Il software deve chiedere per 10 volte all’utente di inserire un numero.

for ( i=1; i <=10; i++) {
    const number =  Number( prompt("Inserisci un numero"));

    const add = number + number + number + number + number + number + number + number + number + number;

    // Il programma stampa la somma di tutti i numeri inseriti.
    console.log(add);
}