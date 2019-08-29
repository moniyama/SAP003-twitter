

document.getElementById('button').addEventListener("click", newTweet)
document.getElementById('button').addEventListener("click", clean)
// let tweetHistory
// let hour = [];
// let d = new Date();
// let time = String(d.getHours()) + ":" + d.getMinutes();
let history = [];
let historico;

if(!localStorage.getItem("tweet")) {
  historico = [];
  console.log('inicio sem historico');
} else {
  console.log('inicio tem historico');
  print();
}



function newTweet() {
  history = historico;
  history.unshift(document.getElementById('tweet').value);     // adiciona na array o input
  console.log(history);
  historyJSON = JSON.stringify(history);        // transforma a array em obj JSON
  localStorage.setItem('tweet', historyJSON)

print()
}

// function tweet () {
//
//   if(tweetHistory == null) {
//     tweetHistory = [];
//     console.log('tweetHistory null');
//
//   } else {
//     tweetHistory = JSON.parse(localStorage.getItem('tweet')); // a array recupera oq está no localStorage;
//     console.log('tweetHistory JSON');
//     }
//
//   tweetHistory.unshift(document.getElementById('tweet').value); // adiciona na array
//   // hour.push(time);
//   let tweetHistoryJSON = JSON.stringify(tweetHistory); // transforma a array em obj JSON
//
//   localStorage.setItem('tweet', tweetHistoryJSON);  // coloca no localStorage a array obj JSON
//   // localStorage.setItem('hour', time);
//   console.log(localStorage);
//   // console.log(hour)
// print();
// }
//

function print() {
  historico = JSON.parse(localStorage.getItem('tweet')); // recupera oq está no localStorage(JSON) e transf. em array;
  let historyPrint = historico.map(function (historico) {
    return '<li>' + historico + '</li>'
  }).join("");

  document.getElementById('historico').innerHTML =
  `<ul> ${historyPrint} </ul> `


}

function clean () {
  document.getElementById('form').reset();

}
