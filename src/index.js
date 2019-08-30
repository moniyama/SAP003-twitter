// let hour = [];
// let d = new Date();
// let time = String(d.getHours()) + ":" + d.getMinutes();
let tweet = document.getElementById('textarea');
let btn = document.getElementById("button");
let cont = document.getElementById('contagem');

btn.addEventListener("click", newTweet)
btn.addEventListener("click", clean)

tweet.onkeyup = function () {contagem()}
tweet.addEventListener("input", disable);   // event input
tweet.dispatchEvent(new Event('input'));

let history = [];
let historico;

cont.innerHTML = 140;

function disable () {
  if (tweet.value.trim() == "") {
    btn.disabled = true;
  } else {
    btn.disabled = !event.target.value; // estudar
  }
}

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
