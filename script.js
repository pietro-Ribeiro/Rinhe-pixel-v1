//quando o jogo rodar
let moedas = parseInt(localStorage.getItem("moedas"))

if (isNaN(moedas)) {
  //se o let moedas der isNaN(nao é dinheiro)
  moedas = 10
}
document.getElementById("moedas").textContent = moedas

class galoBase {
  constructor(vida, nome, preço) {
    this.vida = vida;
    this.nome = nome;
    this.preço = preço;
    //galo base, atributos padrão
  }
}
const galoboss = new galoBase (200, "pintinho amarelinho")
const galoPlayer = new galoBase (100, "galo carijo")

function fraco() {
  let botFraco = Math.floor(Math.random() * 41) + 70
  //criação do bot
  
  if (botFraco > galoPlayer.vida) {
    //se vida de bot fraco for menor de que galo do player
  document.getElementById("vida2").textContent = botFraco
    let falaDerrota = document.getElementById("perdeu").showModal()
    moedas = moedas - 5
    document.getElementById("moedas").textContent = moedas
    localStorage.setItem("moedas", moedas)
    document.getElementById("vida2").textContent = botFraco
  }
  else if (botFraco === galoPlayer.vida) {
    //se der empate
    let falaEmpate = document.getElementById("empate").showModal()
    document.getElementById("vida2").textContent = botFraco
  }
  else if (botFraco < galoPlayer.vida) {
    //se galo do player vencer bot
    let falaVitoria = document.getElementById("vitoria").showModal()
    moedas = moedas + 5
    document.getElementById("moedas").textContent = moedas
    localStorage.setItem("moedas", moedas)
  document.getElementById("vida2").textContent = botFraco
  }
}
function forte() {
  let botForte = Math.floor(Math.random() * (200 - 85 + 1)) + 85
 
  if (botForte > galoPlayer.vida) {
    let fala = document.getElementById("perdeu").showModal()
    moedas = moedas - 20
    localStorage.setItem("moedas", moedas)
    document.getElementById("moedas").textContent = moedas
  }
  else if (botForte < galoPlayer.vida) {
    let fala = document.getElementById("vitoria").showModal()
    moedas = moedas + 20
    localStorage.setItem("moedas", moedas)
    document.getElementById("moedas").textContent = moedas
  }
  else if (botForte === galoPlayer.vida) {
    document.getElementById("empate").showModal()
  }
}
function fechar1() {
  let fala = document.getElementById("perdeu").close()
}
function fechar2() {
  let fala = document.getElementById("empate").close()
}
function fechar3() {
  let fala = document.getElementById("vitoria").close()
}
function escuro() {
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
}
function claro() {
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
  }