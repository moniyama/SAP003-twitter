document.getElementById('button').addEventListener("click", tweet)
document.getElementById('button').addEventListener("click", clean)
  let tweetHistory
// let hour = [];
// let d = new Date();
// let time = String(d.getHours()) + ":" + d.getMinutes();

function tweet () {

  if(tweetHistory == null) {
    tweetHistory = [];
    console.log('tweetHistory null');

  } else {
    tweetHistory = JSON.parse(localStorage.getItem('tweet')); // a array recupera oq está no localStorage;
    console.log('tweetHistory JSON');
    }

  tweetHistory.unshift(document.getElementById('tweet').value); // adiciona na array
  // hour.push(time);
  let tweetHistoryJSON = JSON.stringify(tweetHistory); // transforma a array em obj JSON

  localStorage.setItem('tweet', tweetHistoryJSON);  // coloca no localStorage a array obj JSON
  // localStorage.setItem('hour', time);
  console.log(localStorage);
  // console.log(hour)
print();
}

function print() {
  let tweetHistoryPrint = tweetHistory.map(function (tweetHistory) {
    return '<li>' + tweetHistory + '</li>'
  }).join("");

  document.getElementById('historico').innerHTML =
  `<ul> ${tweetHistoryPrint} </ul> `
}

function clean () {
  document.getElementById('form').reset();

}
