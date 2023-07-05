const inputEl1 = document.getElementById("giocata1");
const inputEl2 = document.getElementById("giocata2");
const inputEl3 = document.getElementById("giocata3");

//output numeri
const outputNumberEl1 = document.querySelector(".output-number1");
const outputNumberEl2 = document.querySelector(".output-number2");

//output vittoria
const winElement = document.querySelector(".win");


const btnEl = document.querySelector(".btn-game");

const mosse = [1,2,3,4,5,6];

//al click si avvia il "gioco"
btnEl.addEventListener("click", function () {
    //giocate utente
    let number1 = parseInt(inputEl1.value);
    let number2 = parseInt(inputEl2.value);
    let number3 = parseInt(inputEl3.value);

    //giocate cpu
    let random1 = Math.floor(Math.random() * 6); //genera numero casuale tra 0 e 5 che sarà indice dell'array mosse
    let mossaCpu1 = mosse[random1];

    let random2 = Math.floor(Math.random() * 6);
    let mossaCpu2 = mosse[random2];

    let random3 = Math.floor(Math.random() * 6);
    let mossaCpu3 = mosse[random3];

    outputNumberEl1.innerHTML = `Hai giocato: <span class='numbers'>${number1} ${number2} ${number3}</span>`;
    outputNumberEl2.innerHTML = `Giocata CPU: <span class='numbers'>${mossaCpu1} ${mossaCpu2} ${mossaCpu3}</span>`;

    //calcolo somma punti 
    let arrPuntiGiocatore = [number1,number2,number3];
    let arrPuntiCpu = [mossaCpu1,mossaCpu2,mossaCpu3];

    let totGiocatore = 0;
    let totCpu = 0;

    for (let i = 0; i < arrPuntiGiocatore.length; i++) {
        totGiocatore = totGiocatore + arrPuntiGiocatore[i];
        totCpu = totCpu + arrPuntiCpu[i];
    }
    //console.log(totGiocatore,totCpu);

    outputNumberEl1.innerHTML += ` - tot. <span class='tot'>${totGiocatore}</span>`;
    outputNumberEl2.innerHTML += ` - tot. <span class='tot'>${totCpu}</span>`;

    //decreta vincitore 
    if (totGiocatore > totCpu) {
        winElement.innerHTML = "<span class='success'>Hai vinto!</span>";
    } else if (totGiocatore === totCpu) {
        winElement.innerHTML = "<span class='par'>Pareggio</span>";
    } else {
        winElement.innerHTML = "<span class='fail'>Hai perso</span>";
    }
});