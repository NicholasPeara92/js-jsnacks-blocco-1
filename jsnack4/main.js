// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const inviteList = ["Paolo", "Marco", "Simone", "Davide", "Nicola",];


const user = prompt("Inserisci il tuo nome");

let invited = false;

for (let i = 0; i < inviteList.length; i++) {
    const element = inviteList[i];
    
    if (user === element) {
        invited = true;
        break;
    } 
    
}
if (invited) {
    alert("Benvenuto");

} else {
    alert("Non sei sulla lista");

}