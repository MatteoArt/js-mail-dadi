const class1 = "success";
const class2 = "fail";

//array contenente ipotetiche mail fittizie
const mail_arr = ["johndoe@example.com","marcobianchi@gmail.com",
"federicorossi@example.com","giopizzi@aruba.it","sergioforti@dnet.com",
"tizioacaso@example.it","dmitrivlador@io.com","miamail@tiscali.it",
"secondamail@tiscali.it"];

//recupero l'input dell'utente e il button
const userMailElement = document.querySelector(".input-mail");
const btnElement = document.querySelector(".btn");

const outputElement = document.querySelector(".output");

//al click sul button 
btnElement.addEventListener("click", function () {
    let mail = userMailElement.value; //recupero la mail inserita
    //console.log(mail);

    let mail_trovata = false;

    for (let i = 0; i < mail_arr.length; i++) {
        let match = mail_arr[i];

        if (match === mail) {
            mail_trovata = true;
        }
    }

    if (mail_trovata === true) {
        outputElement.innerHTML = `<span class='${class1}'>Accesso consentito: la tua mail è registrata</span>`;
    } else {
        outputElement.innerHTML = `<span class='${class2}'>Accesso negato: la mail non è registrata</span>`;
    }
});