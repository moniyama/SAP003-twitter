// let hour = [];
// let d = new Date();
// let time = String(d.getHours()) + ":" + d.getMinutes();
const tweet = document.getElementById('textarea');
const btn = document.getElementById("button");
const cont = document.getElementById('contagem');

let history = [];
let historico;

btn.addEventListener("click", newTweet);
tweet.addEventListener("input", contagem);   // event input - para input ou textarea; similar a onchange event
// tweet.dispatchEvent(new Event('input'));    // ?????????????

if(!localStorage.getItem("tweet")) {
  historico = [];
  console.log('inicio sem historico');
} else {
  console.log('inicio tem historico');
  print();
}

function newTweet() {
  history = historico;
  // if (tweet.value == " ") {
  //   print();
  // } else {
  history.unshift(tweet.value);     // adiciona na array o input
  historyJSON = JSON.stringify(history);        // transforma a array em obj JSON
  localStorage.setItem('tweet', historyJSON);

  document.getElementById('form').reset();
  cont.innerHTML = 140;
  print();
}
  // }

function print() {
  historico = JSON.parse(localStorage.getItem('tweet')); // recupera oq está no localStorage(JSON) e transf. em array;
  let historyPrint = historico.map(function (historico) {
    return '<li>' + historico + '</li>'
  }).join("");

  document.getElementById('historico').innerHTML =
  `<ul> ${historyPrint} </ul> `

  btn.disabled = true;
}

function contagem() {
  let text = event.target.value;
  cont.innerHTML = (140 - text.length);
  if (text.trim() == "" || text.length > 140 ) {
    btn.disabled = true;
  } else {
      btn.disabled = false;
  }
}
