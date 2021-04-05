//gerar espaço para texto
var local = document.querySelector('#local')
function attlocal(){
  local.innerHTML = local.value
}

//numero da I.A
var valorAleatorio = parseInt(Math.random()*20)
    console.log(valorAleatorio)
var tentativas = 5

//botão recomeçar partida
function reiniciar(){
  valorAleatorio = parseInt(Math.random()*20)
    console.log(valorAleatorio)
var tentativas = 5
local.innerHTML = ""
  local.innerHTML = local.innerHTML + "Partida nova gerada!"
  document.getElementById('restart').disabled = true
    document.getElementById('chute').disabled = false
}


//Sistema para jogar
function chutar(){
    while (tentativas > 0){
      var resposta = parseInt(document.getElementById("n").value)
      if (resposta == valorAleatorio) {
        local.innerHTML = ""
local.innerHTML = local.innerHTML + "parabéns! Você acertou! Pegue o troféu🏆"
        document.getElementById('restart').disabled = false
    document.getElementById('chute').disabled = true
        
        break
  
    } 
      else if (resposta < valorAleatorio) {
        local.innerHTML = ""
       local.innerHTML = local.innerHTML + "O número secreto é maior"
        break
        tentativas = tentativas - 1
    
        }
      else if (resposta > valorAleatorio){
        local.innerHTML = ""
       local.innerHTML = local.innerHTML + "O número secreto é menor"
        break
       tentativas = tentativas - 1
    
      }
    }
  }
document.getElementById('restart').disabled = true
    document.getElementById('chute').disabled = false



   