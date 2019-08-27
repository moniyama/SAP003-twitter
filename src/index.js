document.getElementById('button').onclick = function tweet () {
  event.preventDefault();
let d = new Date();
    document.getElementById('historico').innerHTML =
    `<p> ${(document.getElementById('tweet').value)}
    <br> ${d.getHours()}:${d.getMinutes()}`

}
