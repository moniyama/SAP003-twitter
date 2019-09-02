// let hour = [];
// let d = new Date();
// let time = String(d.getHours()) + ":" + d.getMinutes();
const tweet = document.getElementById('textarea');
const btn = document.getElementById("button");
const cont = document.getElementById('contagem');

let history = [];
let historico;

cont.innerHTML = 140;

btn.addEventListener("click", newTweet)
btn.addEventListener("click", clean)

tweet.onkeypress = function () {contagem()}   // keypress não funciona com o backspace!!!
tweet.onkeydown = function () {contagem()}   // para quando for apagar
tweet.addEventListener("input", disable);   // event input
tweet.dispatchEvent(new Event('input'));

function disable () {
  if (event.target.value.trim() == "" || event.target.value.length > 140 ) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

// function disable () {
//   if (tweet.value.trim() == "") {
//     btn.disabled = true;
//   } else {
//     btn.disabled = !event.target.value; // estudar
//   }
// }

if(!localStorage.getItem("tweet")) {
  historico = [];
  console.log('inicio sem historico');
} else {
  console.log('inicio tem historico');
  print();
}

function contagem() {
  cont.innerHTML = (140 - tweet.value.length);
}

function newTweet() {
  history = historico;
  // if (tweet.value == " ") {
  //   print();
  // } else {
    history.unshift(tweet.value);     // adiciona na array o input
    historyJSON = JSON.stringify(history);        // transforma a array em obj JSON
    localStorage.setItem('tweet', historyJSON);

    cont.innerHTML = 140;
    print();
  // }
}

function print() {
  historico = JSON.parse(localStorage.getItem('tweet')); // recupera oq está no localStorage(JSON) e transf. em array;
  let historyPrint = historico.map(function (historico) {
    return '<li>' + historico + '</li>'
  }).join("");

  document.getElementById('historico').innerHTML =
  `<ul> ${historyPrint} </ul> `

    btn.disabled = true;

}

function clean () {
  document.getElementById('form').reset();
}
