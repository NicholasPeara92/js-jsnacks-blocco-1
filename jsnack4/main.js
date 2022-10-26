// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const inviteList = ["Paolo", "Marco", "Simone", "Davide", "Nicola",];


const invited = prompt("Inserisci il tuo nome");

for (let i = 0; i < inviteList.length; i++) {
    const element = inviteList[i];

    if (invited === element) {
        alert("Benvenuto");
        break
    } else {
        alert("Non sei sulla lista");
        break
    }
    
}