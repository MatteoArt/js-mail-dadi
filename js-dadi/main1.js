//recupero elementi html
const giocatoreEl = document.getElementById("giocatore");
const cpuEl = document.getElementById("cpu");

const outputElement = document.querySelector(".output");


//genero numeri randomici

const mosse = [1,2,3,4,5,6]; //array contenente tutte le mosse possibili

let random1 = Math.floor(Math.random() * 6); //genera numero casuale tra 0 e 5 che sarà indice dell'array mosse
let mossaGiocatore = mosse[random1]; //da 1 a 6, da elementi array mosse

let random2 = Math.floor(Math.random() * 6);
let mossaCpu = mosse[random2];

//console.log(mossaGiocatore,mossaCpu);

giocatoreEl.innerHTML = `Per il giocatore è stato estratto ${mossaGiocatore}`;
cpuEl.innerHTML = `Per il computer è stato estratto ${mossaCpu}`;

//decreto vincitore
if (mossaGiocatore > mossaCpu) {
    outputElement.innerHTML = `Ha vinto il giocatore`;
} else if (mossaGiocatore === mossaCpu) {
    outputElement.innerHTML = `Pareggio`;
} else {
    outputElement.innerHTML = `Ha vinto il computer`;
}